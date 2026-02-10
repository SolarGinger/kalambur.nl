'use client'

import { useState, useEffect } from 'react'

const costumes = [
  { id: 'tiger', name: 'Весёлый тигр', desc: 'Оранжевый полосатый комбинезон с хвостом и ушками. Давид будет рычать на гостей!', image: '/images/costume-tiger.jpg', color: '#ff8f00' },
  { id: 'robot', name: 'Блестящий робот', desc: 'Серебристый костюм с LED-подсветкой и антенной. Танцует только робот-дэнс.', image: '/images/costume-robot.jpg', color: '#78909c' },
  { id: 'panther', name: 'Розовая пантера', desc: 'Плюшевый розовый костюм. Мягкий, тёплый, и очень гламурный.', image: '/images/costume-panther.jpg', color: '#e91e63' },
  { id: 'clown', name: 'Радужный клоун', desc: 'Классика жанра! Большие ботинки, парик и красный нос в комплекте.', image: '/images/costume-clown.jpg', color: '#7b1fa2' },
  { id: 'banana', name: 'Гигантский банан', desc: 'Жёлтый костюм-банан в полный рост. Для тех, кто хочет быть фруктом.', image: '/images/costume-banana.jpg', color: '#fdd835' },
]

type VoteResults = Record<string, number>

export default function VotePage() {
  const [selected, setSelected] = useState<string | null>(null)
  const [hasVoted, setHasVoted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [results, setResults] = useState<VoteResults>({})
  const [total, setTotal] = useState(0)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/votes')
      .then(r => r.json())
      .then(data => {
        const map: VoteResults = {}
        for (const row of data.results || []) map[row.costume_id] = row.count
        setResults(map)
        setTotal(data.total || 0)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  async function handleVote() {
    if (!selected || submitting) return
    setSubmitting(true)
    setError('')
    try {
      const res = await fetch('/api/votes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ costumeId: selected }),
      })
      const data = await res.json()
      if (res.status === 409) {
        setError('\u26A0 \u0412\u044B \u0443\u0436\u0435 \u0433\u043E\u043B\u043E\u0441\u043E\u0432\u0430\u043B\u0438! \u041E\u0434\u0438\u043D \u0433\u043E\u043B\u043E\u0441 \u043D\u0430 \u0447\u0435\u043B\u043E\u0432\u0435\u043A\u0430.')
        const rows = await fetch('/api/votes').then(r => r.json())
        const map: VoteResults = {}
        for (const row of rows.results || []) map[row.costume_id] = row.count
        setResults(map)
        setTotal(rows.total || 0)
        setHasVoted(true)
      } else if (!res.ok) {
        setError('\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0433\u043E\u043B\u043E\u0441\u043E\u0432\u0430\u043D\u0438\u0438.')
      } else {
        const map: VoteResults = {}
        for (const row of data.results || []) map[row.costume_id] = row.count
        setResults(map)
        setTotal(data.total || 0)
        setHasVoted(true)
      }
    } catch {
      setError('\u041E\u0448\u0438\u0431\u043A\u0430 \u0441\u0435\u0442\u0438.')
    }
    setSubmitting(false)
  }

  function pct(id: string) {
    return total === 0 ? 0 : Math.round(((results[id] || 0) / total) * 100)
  }

  function getLeader() {
    let best = '', max = 0
    for (const c of costumes) { const n = results[c.id] || 0; if (n > max) { max = n; best = c.id } }
    return best
  }

  const leader = getLeader()

  return (
    <div style={{ maxWidth: '1024px', margin: '0 auto', fontFamily: 'Verdana, sans-serif', background: 'linear-gradient(to bottom, #fff8e1, #ffe0b2)', minHeight: '100vh' }}>
      {/* HEADER */}
      <header className="site-header">
        <div style={{ fontSize: '18px', color: '#ff6d00' }}>{'~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~'}</div>
        <h1>
          <a href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            {'{ '}<span style={{ color: '#e65100' }}>{'Каламбур'}</span>{'.nl }'}
          </a>
        </h1>
        <p>{'\u2605 Голосование за костюм Давида \u2605'}</p>
        <div style={{ fontSize: '18px', color: '#ff6d00' }}>{'~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~'}</div>
      </header>

      {/* BACK LINK */}
      <div style={{ padding: '8px 12px', background: 'linear-gradient(to bottom, #ffb74d, #ffa726)', borderBottom: '2px solid #e65100' }}>
        <a href="/" style={{ fontFamily: "'Arial Black', Arial, sans-serif", fontSize: '13px', color: '#4e342e', textDecoration: 'none' }}>
          {'\u2190 Назад к новостям'}
        </a>
      </div>

      <div style={{ padding: '16px' }}>
        {/* Title banner */}
        <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '16px' }}>
          <thead>
            <tr>
              <th style={{ background: '#ef9a9a', border: '2px outset #e57373', padding: '10px', fontFamily: "'Arial Black', Arial, sans-serif", fontSize: '16px', color: '#b71c1c', textAlign: 'center' }}>
                {'\uD83D\uDDF3 ГОЛОСОВАНИЕ: Выбери костюм для Давида!'}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ background: '#fce4ec', border: '2px outset #e57373', padding: '10px', fontSize: '12px', textAlign: 'center' }}>
                {'Давид \u2014 наш главный аниматор \u2014 готовится к корпоративу. Помогите ему выбрать костюм!'}
                <br />
                <span style={{ color: '#c62828', fontWeight: 'bold' }}>{'Голосовать можно только один раз!'}</span>
              </td>
            </tr>
          </tbody>
        </table>

        {/* Costume cards */}
        {costumes.map((c) => {
          const isSelected = selected === c.id
          const count = results[c.id] || 0
          const p = pct(c.id)
          const isLeading = leader === c.id && total > 0

          return (
            <table key={c.id} style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '10px' }}>
              <thead>
                <tr>
                  <th colSpan={2} style={{
                    background: isSelected ? c.color : '#ffcc80',
                    color: isSelected ? '#fff' : '#4e342e',
                    border: '2px outset #ffb74d',
                    padding: '6px 10px',
                    fontFamily: "'Arial Black', Arial, sans-serif",
                    fontSize: '13px',
                    textAlign: 'left',
                    transition: 'background 0.2s',
                  }}>
                    {isLeading && (hasVoted || total > 0) ? '\uD83C\uDFC6 ' : ''}{c.name}
                    {isLeading && (hasVoted || total > 0) && ' \u2014 ЛИДЕР!'}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ width: '120px', border: '2px outset #ffb74d', padding: '8px', background: '#fffde7', textAlign: 'center', verticalAlign: 'top' }}>
                    <img
                      src={c.image}
                      alt={c.name}
                      style={{ width: '100px', height: '100px', objectFit: 'cover', border: '2px solid #bcaaa4', borderRadius: '4px' }}
                    />
                  </td>
                  <td style={{ border: '2px outset #ffb74d', padding: '10px', background: '#fffde7', verticalAlign: 'top' }}>
                    <div style={{ fontSize: '12px', color: '#5d4037', marginBottom: '6px' }}>{c.desc}</div>

                    {/* Vote radio - only before voting */}
                    {!hasVoted && (
                      <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', marginBottom: '8px' }}>
                        <input
                          type="radio"
                          name="costume"
                          checked={isSelected}
                          onChange={() => setSelected(c.id)}
                          style={{ width: '18px', height: '18px', accentColor: c.color }}
                        />
                        <span style={{ fontFamily: "'Arial Black', Arial, sans-serif", fontSize: '12px', color: '#4e342e' }}>
                          {'Выбрать этот костюм'}
                        </span>
                      </label>
                    )}

                    {/* Stats bar */}
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: '#5d4037', marginBottom: '3px' }}>
                        <span>{loading ? '...' : `${count} голосов`}</span>
                        <span style={{ fontWeight: 'bold' }}>{loading ? '' : `${p}%`}</span>
                      </div>
                      <div style={{
                        width: '100%',
                        height: '20px',
                        background: '#efebe9',
                        border: '2px inset #bcaaa4',
                        borderRadius: '2px',
                        overflow: 'hidden',
                        position: 'relative',
                      }}>
                        <div style={{
                          width: loading ? '0%' : `${p}%`,
                          height: '100%',
                          background: `repeating-linear-gradient(45deg, ${c.color}, ${c.color} 4px, ${c.color}dd 4px, ${c.color}dd 8px)`,
                          transition: 'width 0.8s ease-out',
                          borderRight: p > 0 ? '2px solid rgba(0,0,0,0.2)' : 'none',
                        }} />
                        {p > 8 && (
                          <span style={{
                            position: 'absolute', top: '50%', left: '50%',
                            transform: 'translate(-50%, -50%)',
                            fontSize: '10px', fontWeight: 'bold', color: '#fff',
                            textShadow: '1px 1px 1px rgba(0,0,0,0.5)',
                            fontFamily: "'Arial Black', Arial, sans-serif",
                          }}>
                            {`${p}%`}
                          </span>
                        )}
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          )
        })}

        {/* Error message */}
        {error && (
          <div style={{
            background: '#ffebee', border: '2px solid #ef9a9a', padding: '10px', margin: '12px 0',
            textAlign: 'center', fontFamily: "'Arial Black', Arial, sans-serif", fontSize: '12px',
            color: '#c62828', borderRadius: '4px',
          }}>
            {error}
          </div>
        )}

        {/* Vote button or results */}
        {!hasVoted ? (
          <div style={{ textAlign: 'center', margin: '16px 0' }}>
            <button
              onClick={handleVote}
              disabled={!selected || submitting}
              style={{
                padding: '12px 40px',
                fontFamily: "'Arial Black', Arial, sans-serif",
                fontSize: '16px',
                color: !selected ? '#999' : '#fff',
                background: !selected ? '#e0e0e0' : 'linear-gradient(to bottom, #ef5350, #c62828)',
                border: '3px outset #e57373',
                borderRadius: '6px',
                cursor: !selected ? 'not-allowed' : 'pointer',
                boxShadow: '2px 2px 6px rgba(0,0,0,0.2)',
              }}
            >
              {submitting ? 'Загрузка...' : '\u2605 ГОЛОСОВАТЬ! \u2605'}
            </button>
          </div>
        ) : (
          /* Ranking table */
          <table style={{ width: '100%', borderCollapse: 'collapse', margin: '16px 0' }}>
            <thead>
              <tr>
                <th style={{ background: '#a5d6a7', border: '2px outset #81c784', padding: '10px', fontFamily: "'Arial Black', Arial, sans-serif", fontSize: '14px', color: '#1b5e20', textAlign: 'center' }}>
                  {'\u2705 Спасибо за голос! Результаты:'}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ background: '#e8f5e9', border: '2px outset #81c784', padding: '12px', textAlign: 'center' }}>
                  <div style={{ fontSize: '13px', color: '#2e7d32', marginBottom: '8px' }}>
                    {`Всего голосов: ${total}`}
                  </div>
                  <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #a5d6a7' }}>
                    <thead>
                      <tr>
                        <th style={{ background: '#c8e6c9', border: '1px solid #a5d6a7', padding: '4px 8px', fontSize: '11px', fontFamily: "'Arial Black', Arial, sans-serif", color: '#1b5e20' }}>{'#'}</th>
                        <th style={{ background: '#c8e6c9', border: '1px solid #a5d6a7', padding: '4px 8px', fontSize: '11px', fontFamily: "'Arial Black', Arial, sans-serif", color: '#1b5e20', textAlign: 'left' }}>{'Костюм'}</th>
                        <th style={{ background: '#c8e6c9', border: '1px solid #a5d6a7', padding: '4px 8px', fontSize: '11px', fontFamily: "'Arial Black', Arial, sans-serif", color: '#1b5e20' }}>{'Голоса'}</th>
                        <th style={{ background: '#c8e6c9', border: '1px solid #a5d6a7', padding: '4px 8px', fontSize: '11px', fontFamily: "'Arial Black', Arial, sans-serif", color: '#1b5e20' }}>{'%'}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[...costumes]
                        .sort((a, b) => (results[b.id] || 0) - (results[a.id] || 0))
                        .map((c, i) => (
                          <tr key={c.id} style={{ background: i === 0 ? '#fff9c4' : '#fff' }}>
                            <td style={{ border: '1px solid #a5d6a7', padding: '4px 8px', fontSize: '12px', textAlign: 'center', fontWeight: 'bold' }}>
                              {i === 0 ? '\uD83E\uDD47' : i === 1 ? '\uD83E\uDD48' : i === 2 ? '\uD83E\uDD49' : `${i + 1}`}
                            </td>
                            <td style={{ border: '1px solid #a5d6a7', padding: '4px 8px', fontSize: '12px' }}>
                              <span style={{ color: c.color, fontWeight: 'bold' }}>{c.name}</span>
                            </td>
                            <td style={{ border: '1px solid #a5d6a7', padding: '4px 8px', fontSize: '12px', textAlign: 'center', fontFamily: "'Arial Black', Arial, sans-serif" }}>
                              {results[c.id] || 0}
                            </td>
                            <td style={{ border: '1px solid #a5d6a7', padding: '4px 8px', fontSize: '12px', textAlign: 'center', fontWeight: 'bold' }}>
                              {`${pct(c.id)}%`}
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                  <a href="/" className="xp-button" style={{ display: 'inline-block', width: 'auto', marginTop: '12px', textDecoration: 'none', textAlign: 'center', padding: '10px 24px' }}>
                    {'\u2190 Вернуться на главную'}
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        )}

        {/* Total info */}
        <div style={{ textAlign: 'center', fontSize: '11px', color: '#8d6e63', marginTop: '12px' }}>
          {loading ? 'Загрузка статистики...' : `Всего проголосовало: ${total} чел.`}
          <br />
          {'Голосование открыто до 1 марта 2026'}
        </div>
      </div>

      {/* FOOTER */}
      <footer className="retro-footer">
        <div style={{ marginTop: '10px', fontSize: '11px', color: '#8d6e63' }}>
          <div>{'Сделано на HTML с любовью \u2665'}</div>
          <div style={{ marginTop: '4px', fontWeight: 'bold' }}>{'\u00A9 Каламбур.nl, 2004-2026'}</div>
          <div style={{ marginTop: '2px', fontSize: '10px' }}>{'Оптимизировано для Internet Explorer 6.0 | Разрешение 1024\u00D7768'}</div>
        </div>
      </footer>
    </div>
  )
}
