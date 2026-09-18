import React, { useState } from 'react';
import { Calendar, Check, Plus, Trash2, Printer, Sparkles, Sun, Moon, Utensils, BookOpen, Music, Heart, RotateCcw } from 'lucide-react';
import confetti from 'canvas-confetti';

const defaultRoutineItems = [
  { id: 1, title: 'Gentle Wake-Up & Morning Hugs', time: '07:30 AM', icon: 'Sun', color: 'honey', completed: false },
  { id: 2, title: 'Toothbrushing Song & Face Wash', time: '08:00 AM', icon: 'Sparkles', color: 'sky', completed: false },
  { id: 3, title: 'Nutritious Breakfast & Fruit Slices', time: '08:30 AM', icon: 'Utensils', color: 'sage', completed: false },
  { id: 4, title: 'Speech & Makaton Sign Play (Mirror)', time: '09:30 AM', icon: 'BookOpen', color: 'lavender', completed: false },
  { id: 5, title: 'Outdoor Garden & Barefoot Walk', time: '10:30 AM', icon: 'Sun', color: 'sage', completed: false },
  { id: 6, title: 'Lunch & Family Table Chat', time: '12:30 PM', icon: 'Utensils', color: 'honey', completed: false },
  { id: 7, title: 'Cozy Rest & Calming Storytime', time: '01:30 PM', icon: 'Moon', color: 'sky', completed: false },
  { id: 8, title: 'Sensory Playdough & Block Stacking', time: '03:30 PM', icon: 'Sparkles', color: 'lavender', completed: false },
  { id: 9, title: 'Warm Bath, Lavender Massage & Lullaby', time: '07:30 PM', icon: 'Heart', color: 'sage', completed: false }
];

export default function RoutineBuilder() {
  const [items, setItems] = useState(defaultRoutineItems);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskTime, setNewTaskTime] = useState('');

  const toggleComplete = (id) => {
    setItems(items.map(item => {
      if (item.id === id) {
        const nextState = !item.completed;
        if (nextState) {
          confetti({
            particleCount: 20,
            spread: 45,
            origin: { y: 0.7 },
            colors: ['#52796f', '#f4a261', '#99c6ed']
          });
        }
        return { ...item, completed: nextState };
      }
      return item;
    }));
  };

  const addTask = (e) => {
    e.preventDefault();
    if (!newTaskTitle.trim()) return;
    const newItem = {
      id: Date.now(),
      title: newTaskTitle.trim(),
      time: newTaskTime || 'Anytime',
      icon: 'Sparkles',
      color: 'sage',
      completed: false
    };
    setItems([...items, newItem]);
    setNewTaskTitle('');
    setNewTaskTime('');
  };

  const deleteTask = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const completedCount = items.filter(i => i.completed).length;

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="routine-builder" className="section-peace" style={{ backgroundColor: 'var(--color-canvas-subtle)' }}>
      <div className="container-peace">
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 40px' }}>
          <span className="peace-badge peace-badge-honey" style={{ marginBottom: '14px' }}>
            <Calendar size={14} className="text-honey-600" />
            Visual Predictability & Comfort
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.7rem)', marginBottom: '14px' }}>
            Mother's Visual Daily Schedule Builder
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)' }}>
            Predictable visual routines bring peace, reduce anxiety, and foster joyful independence. Check off tasks together with your child, or customize and print your family schedule.
          </p>
        </div>

        {/* Progress Bar & Summary */}
        <div
          className="peace-card"
          style={{
            maxWidth: '840px',
            margin: '0 auto 32px',
            padding: '24px 30px',
            background: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px'
          }}
        >
          <div>
            <div style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-primary)' }}>
              Today's Gentle Rhythm: {completedCount} of {items.length} Completed
            </div>
            <div style={{ fontSize: '0.86rem', color: 'var(--text-muted)' }}>
              Each checkmark is a shared smile and celebratory high-five!
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
            {completedCount > 0 && (
              <button
                onClick={() => setItems(items.map(item => ({ ...item, completed: false })))}
                className="btn-peaceful btn-peaceful-secondary btn-peaceful-pill"
                style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem' }}
                title="Uncheck all completed tasks for a fresh start"
              >
                <RotateCcw size={14} />
                <span>Reset for New Day</span>
              </button>
            )}

            <button
              onClick={handlePrint}
              className="btn-peaceful btn-peaceful-secondary btn-peaceful-pill"
              style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
            >
              <Printer size={16} />
              <span>Print Visual Schedule</span>
            </button>
          </div>
        </div>

        {/* Schedule List */}
        <div
          style={{
            maxWidth: '840px',
            margin: '0 auto 36px',
            display: 'flex',
            flexDirection: 'column',
            gap: '14px'
          }}
        >
          {items.map((item) => (
            <div
              key={item.id}
              className="peace-card"
              style={{
                padding: '16px 22px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                background: item.completed ? 'var(--sage-50)' : 'white',
                borderColor: item.completed ? 'var(--sage-200)' : 'var(--border-soft)',
                transition: 'var(--transition-smooth)'
              }}
            >
              <div
                onClick={() => toggleComplete(item.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  cursor: 'pointer',
                  flex: 1
                }}
              >
                {/* Checkbox circle */}
                <div
                  style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    border: item.completed ? 'none' : '2px solid var(--border-soft)',
                    background: item.completed ? 'var(--sage-500)' : 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    flexShrink: 0,
                    transition: 'var(--transition-smooth)'
                  }}
                >
                  {item.completed && <Check size={16} />}
                </div>

                <div>
                  <div
                    style={{
                      fontSize: '1.04rem',
                      fontWeight: 600,
                      color: item.completed ? 'var(--sage-700)' : 'var(--text-primary)',
                      textDecoration: item.completed ? 'line-through' : 'none'
                    }}
                  >
                    {item.title}
                  </div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                    {item.time}
                  </div>
                </div>
              </div>

              <button
                onClick={() => deleteTask(item.id)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--text-muted)',
                  cursor: 'pointer',
                  padding: '6px',
                  borderRadius: 'var(--radius-sm)'
                }}
                title="Remove task"
              >
                <Trash2 size={16} />
              </button>
            </div>
          ))}
        </div>

        {/* Add New Task Form */}
        <form
          onSubmit={addTask}
          className="peace-card"
          style={{
            maxWidth: '840px',
            margin: '0 auto',
            padding: '20px 26px',
            background: 'white',
            display: 'flex',
            gap: '12px',
            flexWrap: 'wrap',
            alignItems: 'center'
          }}
        >
          <input
            type="text"
            placeholder="Add new activity (e.g. Grandma's video call)..."
            value={newTaskTitle}
            onChange={(e) => setNewTaskTitle(e.target.value)}
            style={{
              flex: '2 1 200px',
              width: '100%',
              padding: '10px 16px',
              borderRadius: 'var(--radius-full)',
              border: '1px solid var(--border-soft)',
              outline: 'none',
              fontSize: '0.94rem',
              fontFamily: 'inherit'
            }}
          />
          <input
            type="text"
            placeholder="Time (e.g. 4:00 PM)"
            value={newTaskTime}
            onChange={(e) => setNewTaskTime(e.target.value)}
            style={{
              flex: '1 1 120px',
              width: '100%',
              padding: '10px 16px',
              borderRadius: 'var(--radius-full)',
              border: '1px solid var(--border-soft)',
              outline: 'none',
              fontSize: '0.94rem',
              fontFamily: 'inherit'
            }}
          />
          <button
            type="submit"
            className="btn-peaceful btn-peaceful-primary btn-peaceful-pill"
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', whiteSpace: 'nowrap' }}
          >
            <Plus size={16} />
            <span>Add Routine Card</span>
          </button>
        </form>
      </div>
    </section>
  );
}
