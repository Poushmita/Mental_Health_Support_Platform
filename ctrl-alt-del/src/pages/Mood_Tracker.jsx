import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt } from "react-icons/fa";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";


/**
 * Full CRUD MoodTracker component + grap
 * - Single‑click a row to edit
 * - Double‑click a row to delete
 */
const API_BASE = "http://127.0.0.1:8000/api/mood-entries/";

export default function MoodTracker() {
  /* -------------------- state -------------------- */
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);
  const [moods, setMoods] = useState({ Morning: "", Afternoon: "", Evening: "" });
  const [water, setWater] = useState(0);
  const [energy, setEnergy] = useState(0);
  const [stress, setStress] = useState(0);
  const [feelings, setFeelings] = useState([]);
  const [activities, setActivities] = useState([]);
  const [needs, setNeeds] = useState([]);
  const [todoList, setTodoList] = useState(["", "", "", "", ""]);
  const [reflections, setReflections] = useState(["", "", "", "", ""]);
  const [notes, setNotes] = useState("");
  const [weeklyData, setWeeklyData] = useState([]);
  const [editingId, setEditingId] = useState(null); // ← track the row being edited

  /* -------------------- helpers -------------------- */
  const formatDate = (date) => {
    const d = new Date(date);
    return `${String(d.getDate()).padStart(2, "0")}-${String(d.getMonth() + 1).padStart(2, "0")}-${d.getFullYear()}`;
  };

  const resetForm = () => {
    setSelectedDate(new Date());
    setMoods({ Morning: "", Afternoon: "", Evening: "" });
    setWater(0);
    setEnergy(0);
    setStress(0);
    setFeelings([]);
    setActivities([]);
    setNeeds([]);
    setTodoList(["", "", "", "", ""]);
    setReflections(["", "", "", "", ""]);
    setNotes("");
    setEditingId(null);
  };

  const handleMoodClick = (time, emoji) => {
    setMoods({ ...moods, [time]: emoji });
  };

  const handleToggle = (item, list, setList) => {
    setList(list.includes(item) ? list.filter((f) => f !== item) : [...list, item]);
  };

  /* -------------------- CRUD -------------------- */
  const fetchEntries = async () => {
    try {
      const res = await fetch(API_BASE);
      const data = await res.json();

      // Clean & transform for table display while preserving original fields for editing
      const transformed = data.map((entry) => ({
        ...entry, // keep raw fields for edit
        displayDate: formatDate(entry.date),
        displayMood: [entry.morning_mood, entry.afternoon_mood, entry.evening_mood]
          .map((m) => (m || "").replace(/[+＋]/g, "").trim())
          .filter(Boolean)
          .join(" "),
      }));
      
      setWeeklyData(transformed);
    } catch (error) {
      console.error("Failed to fetch mood entries:", error);
    }
  };

  useEffect(() => {
    fetchEntries();
  }, []);

  const saveMoodEntry = async () => {
    const payload = {
      date: selectedDate.toISOString().split("T")[0],
      morning_mood: moods.Morning,
      afternoon_mood: moods.Afternoon,
      evening_mood: moods.Evening,
      water_intake: water,
      energy_level: energy,
      stress_level: stress,
      feelings: feelings.join(", "),
      activities: activities.join(", "),
      needs: needs.join(", "),
      todo_list: JSON.stringify(todoList),
      reflections: JSON.stringify(reflections),
      notes,
    };

    const url = editingId ? `${API_BASE}${editingId}/` : API_BASE;
    const method = editingId ? "PUT" : "POST";

    // ✅ LOG HERE
  console.log("🟨 PUT to URL:", url);
  console.log("🟨 Editing ID:", editingId);
  console.log("🟨 Payload being sent:", payload);

    try {
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        alert(editingId ? "Mood entry updated!" : "Mood entry saved!");
        resetForm();
        fetchEntries();
      } else {
        console.error(await res.text());
        alert("Failed to save. See console for details.");
      }
    } catch (error) {
      console.error(error);
      alert("Network error. Is Django running?");
    }
  };

  const handleDelete = async (id) => {
    if (!id) return alert("No ID found on this entry.");
    if (!window.confirm("Delete this entry?")) return;
    try {
      const res = await fetch(`${API_BASE}${id}/`, { method: "DELETE" });
      if (res.ok) {
        alert("Deleted!");
        fetchEntries();
      } else {
        alert("Delete failed.");
      }
    } catch (err) {
      console.error("Delete error:", err);
      alert("Delete error");
    }
  };

  const handleEdit = (entry) => {
    setEditingId(entry.id);
    setSelectedDate(new Date(entry.date));
    setMoods({
      Morning: entry.morning_mood,
      Afternoon: entry.afternoon_mood,
      Evening: entry.evening_mood,
    });
    setWater(entry.water_intake || 0);
    setEnergy(entry.energy_level || 0);
    setStress(entry.stress_level || 0);
    setFeelings(entry.feelings ? entry.feelings.split(/,\s*/) : []);
    setActivities(entry.activities ? entry.activities.split(/,\s*/) : []);
    setNeeds(entry.needs ? entry.needs.split(/,\s*/) : []);
    setTodoList(entry.todo_list ? JSON.parse(entry.todo_list) : ["", "", "", "", ""]);
    setReflections(entry.reflections ? JSON.parse(entry.reflections) : ["", "", "", "", ""]);
    setNotes(entry.notes || "");
  };

  /* -------------------- UI -------------------- */
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-pink-50 to-sky-100 p-6 font-sans text-gray-700">
      <h1 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-sky-500 mb-8">
        Mood Tracker
      </h1>

      {/* Editing Banner */}
      {editingId && (
        <div className="mb-4 p-3 bg-yellow-100 border border-yellow-400 text-yellow-800 rounded text-center">
          Editing entry for <strong>{formatDate(selectedDate)}</strong>
          <button onClick={resetForm} className="ml-4 text-sm text-red-600 underline">
            Cancel
          </button>
        </div>
      )}

      {/* Date Box + SMTWTFS */}
      <div className="flex flex-col items-end mb-6 relative">
        <div className="flex items-center gap-2 border border-gray-300 rounded px-3 py-2 shadow bg-white">
          <span className="text-gray-700 font-medium">Date:</span>
          <span>{formatDate(selectedDate)}</span>
          <button onClick={() => setShowCalendar(!showCalendar)} className="text-sky-600 text-xl">
            <FaCalendarAlt />
          </button>
        </div>
        {showCalendar && (
          <div className="absolute z-50 mt-2 right-0">
            <DatePicker
              selected={selectedDate}
              onChange={(date) => {
                setSelectedDate(date);
                setShowCalendar(false);
              }}
              inline
            />
          </div>
        )}
        <div className="flex gap-1 mt-2">
          {"SMTWTFS".split("").map((day, idx) => {
            const currentDay = selectedDate.getDay(); // 0 = Sunday
            return (
              <button
                key={day}
                className={`w-6 h-6 text-xs rounded-full flex items-center justify-center ${idx === currentDay ? "bg-sky-500 text-white" : "bg-sky-200 text-sky-800"}`}
                onClick={() => {
                  const newDate = new Date(selectedDate);
                  const diff = idx - currentDay;
                  newDate.setDate(selectedDate.getDate() + diff);
                  setSelectedDate(newDate);
                }}
              >
                {day}
              </button>
            );
          })}
        </div>
      </div>

      {/* Mood Selection */}
      <div className="flex flex-wrap gap-6 mb-6">
        {["Morning", "Afternoon", "Evening"].map((time) => (
          <div key={time} className="flex-1 min-w-[150px]">
            <h2 className="font-semibold text-pink-600">Mood - {time}</h2>
            <div className="flex gap-2 mt-2">
              {["😀", "🙂", "😐", "🙁", "😢"].map((emoji) => (
                <button
                  key={emoji}
                  onClick={() => handleMoodClick(time, emoji)}
                  className={`text-2xl ${moods[time] === emoji ? "scale-110" : ""}`}
                >
                  {emoji}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Water, Energy, Stress */}
      <div className="grid md:grid-cols-3 gap-4 mb-6">
        {/* Water */}
        <div>
          <h2 className="font-semibold text-sky-600">Water Intake</h2>
          <div className="flex gap-1 mt-2">
            {Array(10)
              .fill(null)
              .map((_, i) => (
                <div
                  key={i}
                  className={`w-5 h-5 rounded-full cursor-pointer ${i < water ? "bg-sky-400" : "border-2 border-sky-400"}`}
                  onClick={() => setWater(water === i + 1 ? 0 : i + 1)}
                ></div>
              ))}
          </div>
        </div>

        {/* Energy */}
        <div>
          <h2 className="font-semibold text-sky-600">Energy Level</h2>
          <div className="flex gap-1 mt-2">
            {Array(10)
              .fill(null)
              .map((_, i) => (
                <span key={i} className="cursor-pointer" onClick={() => setEnergy(energy === i + 1 ? 0 : i + 1)}>
                  {i < energy ? "⭐" : "☆"}
                </span>
              ))}
          </div>
        </div>

        {/* Stress */}
        <div>
          <h2 className="font-semibold text-sky-600">Stress Level</h2>
          <div className="flex gap-1 mt-2">
            {Array(10)
              .fill(null)
              .map((_, i) => (
                <div
                  key={i}
                  onClick={() => setStress(stress === i + 1 ? 0 : i + 1)}
                  className={`w-4 h-4 rounded-sm cursor-pointer ${i < stress ? "bg-red-400" : "bg-gray-300"}`}
                ></div>
              ))}
          </div>
        </div>
      </div>

      {/* Feelings, Activities, Needs */}
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        {/* Feelings */}
        <div>
          <h2 className="font-semibold text-pink-600 mb-2">My Feelings</h2>
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
            {[
              "Happy","Sad","Angry","Excited","Nervous","Calm","Anxious","Confident","Frustrated","Content","Bored","Curious","Jealous","Grateful","Embarrassed","Proud","Guilty","Hopeful","Scared","Lonely","Relaxed","Worried","Shocked","Joyful","Annoyed",
            ].map((feeling) => (
              <label key={feeling} className="flex items-center gap-1">
                <input type="checkbox" className="accent-pink-500" onChange={() => handleToggle(feeling, feelings, setFeelings)} checked={feelings.includes(feeling)} />
                {feeling}
              </label>
            ))}
          </div>
        </div>

        {/* Activities + Needs */}
        <div>
          <h2 className="font-semibold text-pink-600 mb-2">My Activities</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {[
              "Exercise","Work","Meeting","Reading","Shopping","Cooking","Walking","Gardening","Writing","Cleaning","Playing","Driving","Gym","Napping","Swimming",
            ].map((activity) => (
              <label key={activity} className="flex items-center gap-1">
                <input type="checkbox" className="accent-sky-500" onChange={() => handleToggle(activity, activities, setActivities)} checked={activities.includes(activity)} />
                {activity}
              </label>
            ))}
          </div>

          {/* Needs */}
          <div className="mt-4">
            <h2 className="font-semibold text-orange-500 mb-2">Did I Have Enough?</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {[
                "Water","Rest","Walk","Work","Fruits","Exercise","Sleep","Vegetables","Vitamins",
              ].map((need) => (
                <label key={need} className="flex items-center gap-1">
                  <input type="checkbox" className="accent-orange-400" onChange={() => handleToggle(need, needs, setNeeds)} checked={needs.includes(need)} />
                  {need}
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* To-Do and Reflections */}
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        {/* To-Do */}
        <div>
          <h2 className="font-semibold text-yellow-600 mb-2">To Do List</h2>
          {todoList.map((item, i) => (
            <input
              key={i}
              type="text"
              value={item}
              onChange={(e) => {
                const newTodos = [...todoList];
                newTodos[i] = e.target.value;
                setTodoList(newTodos);
              }}
              className="w-full mb-2 p-2 rounded border border-gray-300"
              placeholder={`Task ${i + 1}`}
            />
          ))}
        </div>

        {/* Reflections */}
        <div>
          <h2 className="font-semibold text-sky-600 mb-2">Personal Reflections</h2>
          {reflections.map((ref, i) => (
            <input
              key={i}
              type="text"
              value={ref}
              onChange={(e) => {
                const newRefs = [...reflections];
                newRefs[i] = e.target.value;
                setReflections(newRefs);
              }}
              className="w-full mb-2 p-2 rounded border border-gray-300"
              placeholder={`Reflection ${i + 1}`}
            />
          ))}
        </div>
      </div>
       {/* Notes */}
      <div className="mb-6">
        <h2 className="font-semibold text-gray-600 mb-2">Notes</h2>
        <textarea className="w-full p-4 rounded border border-gray-300" rows="4" placeholder="Write any notes here..." value={notes} onChange={(e) => setNotes(e.target.value)}></textarea>
      </div>

      {/* Save Button */}
      <div className="flex justify-center mb-6">
        <button onClick={saveMoodEntry} className="px-6 py-2 bg-pink-500 text-white rounded">
          Save Mood
        </button>
      </div>

      {/* Weekly History */}
      <div className="bg-white p-4 rounded shadow mb-10">
        <h2 className="text-lg font-bold text-gray-700 mb-3">Weekly History</h2>
        <table className="w-full text-sm text-left">
          <thead>
            <tr className="bg-sky-200 text-gray-800">
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Mood</th>
              <th className="px-4 py-2">Feelings</th>
              <th className="px-4 py-2">Activities</th>
            </tr>
          </thead>
          <tbody>
            {weeklyData.map((entry, idx) => {
              const isEditing = editingId === entry.id;
              return (
              <tr
                key={entry.id || idx}
                className="border-b cursor-pointer hover:bg-red-50"
                onClick={() => handleEdit(entry)}
                onDoubleClick={(e) => {
    e.stopPropagation(); // prevent click from also firing
    handleDelete(entry.id);
  }}
                
              >
                <td className="px-4 py-2">{entry.displayDate}</td>
                <td className="px-4 py-2">{entry.displayMood}</td>
                <td className="px-4 py-2">{entry.feelings}</td>
                <td className="px-4 py-2">{entry.activities}</td>
              </tr>
            );
})}
          </tbody>
        </table>  
        </div>

    {/* GRAPH */}
    {weeklyData.length > 0 && (
      <div className="mt-10 bg-white p-4 rounded shadow">
        <h2 className="text-lg font-bold text-gray-700 mb-3">Mood Trend Chart</h2>
        <LineChart
          width={700}
          height={300}
          data={weeklyData}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="displayDate" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="water_intake" stroke="#8884d8" name="Water" />
          <Line type="monotone" dataKey="energy_level" stroke="#82ca9d" name="Energy" />
          <Line type="monotone" dataKey="stress_level" stroke="#ff6f61" name="Stress" />
        </LineChart>
      </div>
    )}
  </div>
  )} 


