'use client'

import { useState, useEffect, useCallback } from 'react'
import { ArticleLayout } from '@/components/article-layout'

interface Comment {
  id: number
  name: string
  text: string
  date: string
  color: string
}

const BG_COLORS = ['#FFCC99','#CCFFCC','#FF99CC','#99CCFF','#FFCCFF','#CCFFFF','#FFFFCC','#FF9999']

function getRandomColor() {
  return BG_COLORS[Math.floor(Math.random() * BG_COLORS.length)]
}

function getComments(): Comment[] {
  if (typeof window === 'undefined') return []
  try {
    return JSON.parse(localStorage.getItem('kalamburComments') || '[]')
  } catch {
    return []
  }
}

function saveComments(comments: Comment[]) {
  localStorage.setItem('kalamburComments', JSON.stringify(comments))
}

export default function GuestbookPage() {
  const [comments, setComments] = useState<Comment[]>([])
  const [name, setName] = useState('')
  const [text, setText] = useState('')
  const [status, setStatus] = useState<{ msg: string; color: string } | null>(null)

  useEffect(() => {
    setComments(getComments())
  }, [])

  const showStatus = useCallback((msg: string, color: string) => {
    setStatus({ msg, color })
    setTimeout(() => setStatus(null), 3000)
  }, [])

  function handleSubmit() {
    const trimName = name.trim() || 'Аноним'
    const trimText = text.trim()

    if (trimText.length < 3) {
      showStatus('Напишите хотя бы 3 символа!', '#d32f2f')
      return
    }

    const newComment: Comment = {
      id: Date.now(),
      name: trimName,
      text: trimText,
      date: new Date().toLocaleDateString('ru-RU'),
      color: getRandomColor(),
    }

    const updated = [...comments, newComment]
    saveComments(updated)
    setComments(updated)
    setName('')
    setText('')
    showStatus('Спасибо! Ваш комментарий добавлён!', '#2e7d32')
    // Dispatch event so other components on the page can update
    window.dispatchEvent(new Event('kalamburCommentsUpdated'))
  }

  const reversed = [...comments].reverse()

  return (
    <ArticleLayout>
      <div className="retro-panel">
        <div className="retro-panel-header" style={{ fontSize: '16px', padding: '8px 12px' }}>
          {'\u2605 ГОСТЕВАЯ КНИГА \u2605'}
        </div>
        <div style={{ padding: '12px' }}>

          {/* BANNER */}
          <table style={{ width: '100%', border: '2px solid #ffd54f', marginBottom: '14px' }}>
            <tbody>
              <tr>
                <td style={{
                  background: '#fff9c4',
                  textAlign: 'center',
                  padding: '16px 12px',
                  fontFamily: "'Comic Sans MS', 'Comic Sans', cursive",
                  fontSize: '22px',
                  fontWeight: 'bold',
                  color: '#d84315',
                }}>
                  {'НАПИШИТЕ СВОЙ ОТЗЫВ, ЗАМЕЧАНИЕ ИЛИ ПРЕДЛОЖЕНИЕ!'}
                  <div style={{ fontSize: '13px', fontWeight: 'normal', color: '#795548', marginTop: '6px', fontFamily: 'Verdana, sans-serif' }}>
                    {'Ваше мнение важно для редакции каламбур.nl!'}
                  </div>
                </td>
              </tr>
            </tbody>
          </table>

          {/* FORM */}
          <table style={{ width: '100%', border: '1px solid #90caf9', borderCollapse: 'collapse', marginBottom: '16px', background: '#CCEEFF' }}>
            <tbody>
              <tr>
                <td style={{ padding: '10px', fontFamily: "'Arial Black', Arial, sans-serif", fontSize: '12px', color: '#4e342e', width: '120px', borderBottom: '1px solid #90caf9' }}>
                  {'Имя:'}
                </td>
                <td style={{ padding: '10px', borderBottom: '1px solid #90caf9' }}>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    maxLength={20}
                    placeholder="Ваше имя"
                    style={{
                      width: '100%',
                      padding: '8px 10px',
                      fontFamily: 'Verdana, sans-serif',
                      fontSize: '13px',
                      border: '2px inset #bcaaa4',
                      borderRadius: '4px',
                      background: '#fff',
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td style={{ padding: '10px', fontFamily: "'Arial Black', Arial, sans-serif", fontSize: '12px', color: '#4e342e', verticalAlign: 'top', borderBottom: '1px solid #90caf9' }}>
                  {'Комментарий:'}
                </td>
                <td style={{ padding: '10px', borderBottom: '1px solid #90caf9' }}>
                  <textarea
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    rows={5}
                    maxLength={500}
                    placeholder="Пишите здесь..."
                    style={{
                      width: '100%',
                      padding: '8px 10px',
                      fontFamily: 'Verdana, sans-serif',
                      fontSize: '13px',
                      border: '2px inset #bcaaa4',
                      borderRadius: '4px',
                      background: '#fff',
                      resize: 'vertical',
                    }}
                  />
                  <div style={{ fontSize: '10px', color: '#888', textAlign: 'right', marginTop: '2px' }}>
                    {`${text.length}/500`}
                  </div>
                </td>
              </tr>
              <tr>
                <td colSpan={2} style={{ padding: '10px', textAlign: 'center' }}>
                  <button
                    onClick={handleSubmit}
                    style={{
                      background: '#FF9900',
                      border: '2px outset #FF6600',
                      borderRadius: '6px',
                      padding: '10px 28px',
                      fontFamily: "'Arial Black', Arial, sans-serif",
                      fontSize: '14px',
                      fontWeight: 'bold',
                      color: '#fff',
                      cursor: 'pointer',
                      textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
                    }}
                  >
                    {'Отправить!'}
                  </button>
                </td>
              </tr>
              {status && (
                <tr>
                  <td colSpan={2} style={{ padding: '8px', textAlign: 'center', color: status.color, fontFamily: "'Arial Black', Arial, sans-serif", fontSize: '13px' }}>
                    {status.msg}
                  </td>
                </tr>
              )}
            </tbody>
          </table>

          {/* SEPARATOR */}
          <div style={{ textAlign: 'center', fontSize: '18px', color: '#ff6d00', margin: '14px 0' }}>
            {'\u2605 \u2605 \u2605 \u2605 \u2605'}
          </div>

          {/* COMMENTS LIST */}
          <div style={{ fontFamily: "'Arial Black', Arial, sans-serif", fontSize: '14px', color: '#4e342e', marginBottom: '10px', textAlign: 'center' }}>
            {'КОММЕНТАРИИ ПОСЕТИТЕЛЕЙ:'}
          </div>

          {reversed.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '20px', background: '#fff9c4', border: '2px dashed #ffd54f', borderRadius: '6px', fontFamily: 'Verdana, sans-serif', fontSize: '13px', color: '#795548' }}>
              {'Пока никто не написал. Будьте первым!'}
            </div>
          ) : (
            reversed.map((comment) => (
              <table key={comment.id} style={{ width: '100%', border: '1px solid #000', marginBottom: '10px', borderCollapse: 'collapse' }}>
                <thead>
                  <tr>
                    <td colSpan={2} style={{ background: '#666', color: '#fff', fontWeight: 'bold', padding: '6px 10px', fontFamily: "'Arial Black', Arial, sans-serif", fontSize: '12px', borderBottom: '1px solid #000' }}>
                      {`${comment.date} @${comment.name}`}
                    </td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colSpan={2} style={{ padding: '10px', fontFamily: 'Verdana, sans-serif', fontSize: '13px', background: comment.color, lineHeight: '1.5' }}>
                      {comment.text}
                    </td>
                  </tr>
                </tbody>
              </table>
            ))
          )}
        </div>
      </div>
    </ArticleLayout>
  )
}
