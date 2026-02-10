'use client'

import { useState } from 'react'
import { ArticleLayout } from '@/components/article-layout'

const allArticles = [
  {
    id: 1,
    title: '12 секретов знакомства с азиатками',
    author: 'И. Пугачёв (@spnlck)',
    preview: 'Игорь раскрывает ШОКИРУЮЩИЕ секреты!',
    date: '2026-02-10',
    dateLabel: '10.02.2026',
    month: '2026-02',
    link: '/news/asian-secrets',
    headerBg: '#ffcc80',
    bodyBg: '#fffde7',
  },
  {
    id: 2,
    title: 'Топ 5 хинкальных Бенелюкса',
    author: 'Олег Нижник (@Odomontois)',
    preview: '\u21161 шокирует всех гурманов!',
    date: '2026-02-08',
    dateLabel: '08.02.2026',
    month: '2026-02',
    link: '/news/hinkali-top',
    headerBg: '#a5d6a7',
    bodyBg: '#e8f5e9',
  },
  {
    id: 3,
    title: 'Корейская барбекюшная: фотоотчёт',
    author: 'Илона (@ilon_essa)',
    preview: 'Мясо жарится САМО на столе!',
    date: '2026-02-05',
    dateLabel: '05.02.2026',
    month: '2026-02',
    link: '/news/kbbq-report',
    headerBg: '#ffcc80',
    bodyBg: '#fff8e1',
  },
  {
    id: 4,
    title: 'Верка Сердючка в Амстердаме!',
    author: 'Редакция',
    preview: 'Концерт на Red Light District?!',
    date: '2026-02-03',
    dateLabel: '03.02.2026',
    month: '2026-02',
    link: '/news/verkka-amsterdam',
    headerBg: '#ce93d8',
    bodyBg: '#f3e5f5',
  },
]

const months = [
  { value: '', label: 'Все месяцы' },
  { value: '2026-02', label: 'Февраль 2026' },
  { value: '2026-01', label: 'Январь 2026' },
  { value: '2025-12', label: 'Декабрь 2025' },
]

export default function NewsListPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedMonth, setSelectedMonth] = useState('')

  const filtered = allArticles.filter((a) => {
    const matchesSearch = searchQuery.trim() === '' ||
      a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.preview.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesMonth = selectedMonth === '' || a.month === selectedMonth
    return matchesSearch && matchesMonth
  })

  function handleReset() {
    setSearchQuery('')
    setSelectedMonth('')
  }

  return (
    <ArticleLayout>
      <div className="retro-panel">
        <div className="retro-panel-header" style={{ fontSize: '16px', padding: '8px 12px' }}>
          {'\uD83D\uDCF0 ВСЕ СТАТЬИ ПОРТАЛА'}
        </div>
        <div style={{ padding: '12px' }}>

          {/* SEARCH FORM */}
          <table style={{ width: '100%', borderCollapse: 'collapse', border: '2px solid #ffb74d', marginBottom: '14px', background: '#fff9c4' }}>
            <thead>
              <tr>
                <th colSpan={2} style={{ background: 'linear-gradient(to bottom, #ffb74d, #ffa726)', color: '#4e342e', fontFamily: "'Arial Black', Arial, sans-serif", fontSize: '13px', padding: '6px 10px', textAlign: 'left', borderBottom: '2px solid #ff8f00' }}>
                  {'\uD83D\uDD0D ПОИСК СТАТЕЙ'}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: '10px', fontSize: '13px', fontFamily: 'Verdana, sans-serif' }}>
                  <div style={{ marginBottom: '8px' }}>
                    <span style={{ fontWeight: 'bold', fontFamily: "'Arial Black', Arial, sans-serif", fontSize: '12px', color: '#4e342e' }}>{'Поиск:'}</span>
                    <div style={{ display: 'flex', gap: '6px', marginTop: '4px' }}>
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="азиатки, хинкали, Верка..."
                        style={{
                          flex: 1,
                          padding: '8px 10px',
                          fontFamily: 'Verdana, sans-serif',
                          fontSize: '13px',
                          border: '2px inset #bcaaa4',
                          borderRadius: '4px',
                          background: '#fff',
                        }}
                      />
                      <button
                        onClick={() => {}}
                        className="xp-button"
                        style={{ width: 'auto', padding: '8px 16px', textAlign: 'center' }}
                      >
                        {'Найти'}
                      </button>
                    </div>
                  </div>
                  <div style={{ marginBottom: '8px' }}>
                    <span style={{ fontWeight: 'bold', fontFamily: "'Arial Black', Arial, sans-serif", fontSize: '12px', color: '#4e342e' }}>{'Фильтр по дате:'}</span>
                    <div style={{ display: 'flex', gap: '6px', marginTop: '4px' }}>
                      <select
                        value={selectedMonth}
                        onChange={(e) => setSelectedMonth(e.target.value)}
                        style={{
                          flex: 1,
                          padding: '8px 10px',
                          fontFamily: 'Verdana, sans-serif',
                          fontSize: '13px',
                          border: '2px inset #bcaaa4',
                          borderRadius: '4px',
                          background: '#fff',
                        }}
                      >
                        {months.map((m) => (
                          <option key={m.value} value={m.value}>{m.label}</option>
                        ))}
                      </select>
                      <button
                        onClick={() => {}}
                        className="xp-button"
                        style={{ width: 'auto', padding: '8px 16px', textAlign: 'center' }}
                      >
                        {'Применить'}
                      </button>
                    </div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <button
                      onClick={handleReset}
                      className="xp-button"
                      style={{ width: 'auto', padding: '6px 14px', textAlign: 'center', fontSize: '11px' }}
                    >
                      {'Сброс'}
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>

          {/* RESULTS COUNT */}
          <div style={{ fontFamily: 'Verdana, sans-serif', fontSize: '12px', color: '#795548', marginBottom: '10px', fontStyle: 'italic' }}>
            {`Найдено статей: ${filtered.length}`}
          </div>

          {/* ARTICLES LIST */}
          {filtered.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '20px', background: '#fff9c4', border: '2px dashed #ffd54f', borderRadius: '6px', fontFamily: 'Verdana, sans-serif', fontSize: '13px', color: '#795548' }}>
              {'Ничего не найдено. Попробуйте изменить запрос.'}
            </div>
          ) : (
            filtered.map((article) => (
              <table key={article.id} className="news-table" style={{ border: '2px solid #ffb74d' }}>
                <thead>
                  <tr>
                    <th style={{ background: article.headerBg }}>
                      <a href={article.link} style={{ color: '#4e342e', textDecoration: 'none' }}>
                        {article.title}
                      </a>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ background: article.bodyBg }}>
                    <td style={{ padding: '10px' }}>
                      <div style={{ fontFamily: "'Arial Black', Arial, sans-serif", fontSize: '11px', color: '#795548', marginBottom: '4px' }}>
                        {`Автор: ${article.author}`}
                      </div>
                      <div style={{ fontFamily: 'Verdana, sans-serif', fontSize: '13px', color: '#333', marginBottom: '6px' }}>
                        {`"${article.preview}"`}
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontSize: '11px', color: '#888', fontStyle: 'italic', fontFamily: 'Verdana, sans-serif' }}>
                          {article.dateLabel}
                        </span>
                        <a
                          href={article.link}
                          className="xp-button"
                          style={{ width: 'auto', padding: '6px 14px', textAlign: 'center', fontSize: '11px', textDecoration: 'none' }}
                        >
                          {'\u2192 читать полностью'}
                        </a>
                      </div>
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
