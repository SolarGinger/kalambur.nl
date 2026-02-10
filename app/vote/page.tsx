'use client'

import { useState } from 'react'
import Image from 'next/image'
import { RetroHeader } from '@/components/retro-header'
import { RetroFooter } from '@/components/retro-footer'

const costumes = [
  {
    id: 'tiger',
    name: 'Весёлый тигр',
    description: 'Оранжевый полосатый комбинезон с хвостом и ушками. Давид будет рычать на гостей!',
    image: '/images/costume-tiger.jpg',
  },
  {
    id: 'robot',
    name: 'Блестящий робот',
    description: 'Серебристый костюм с LED-подсветкой и антенной. Танцует только робот-дэнс.',
    image: '/images/costume-robot.jpg',
  },
  {
    id: 'panther',
    name: 'Розовая пантера',
    description: 'Плюшевый розовый костюм. Мягкий, тёплый, и очень гламурный.',
    image: '/images/costume-panther.jpg',
  },
  {
    id: 'clown',
    name: 'Радужный клоун',
    description: 'Классика жанра! Большие ботинки, парик и красный нос в комплекте.',
    image: '/images/costume-clown.jpg',
  },
  {
    id: 'banana',
    name: 'Гигантский банан',
    description: 'Жёлтый костюм-банан в полный рост. Для тех, кто хочет быть фруктом.',
    image: '/images/costume-banana.jpg',
  },
]

export default function VotePage() {
  const [selected, setSelected] = useState<string | null>(null)
  const [voted, setVoted] = useState(false)

  function handleVote() {
    if (selected) {
      setVoted(true)
    }
  }

  return (
    <div style={{ maxWidth: '1024px', margin: '0 auto' }}>
      <RetroHeader />

      <div style={{ padding: '16px' }}>
        <div className="retro-panel">
          <div className="retro-panel-header" style={{ fontSize: '16px', padding: '10px 14px' }}>
            {'🗳 ГОЛОСОВАНИЕ: Выбери костюм для Давида!'}
          </div>
          <div style={{ padding: '14px' }}>
            <div style={{
              background: '#fff9c4',
              border: '1px dashed #ffd54f',
              borderRadius: '6px',
              padding: '10px',
              marginBottom: '14px',
              fontFamily: 'Verdana, sans-serif',
              fontSize: '13px',
            }}>
              {'Друзья! Давид — наш главный аниматор — готовится к корпоративу. Помогите ему выбрать костюм! Голосование анонимное (но мы всё равно знаем, кто вы).'}
            </div>

            {!voted ? (
              <>
                {costumes.map((costume) => (
                  <label key={costume.id} className="vote-option">
                    <input
                      type="radio"
                      name="costume"
                      value={costume.id}
                      checked={selected === costume.id}
                      onChange={() => setSelected(costume.id)}
                      style={{ width: '20px', height: '20px', accentColor: '#e65100' }}
                    />
                    <Image
                      src={costume.image}
                      alt={costume.name}
                      width={100}
                      height={100}
                      style={{
                        border: '2px solid #bcaaa4',
                        borderRadius: '4px',
                        objectFit: 'cover',
                      }}
                    />
                    <div>
                      <div style={{
                        fontFamily: 'Arial Black, Arial, sans-serif',
                        fontSize: '15px',
                        color: '#d84315',
                        marginBottom: '4px',
                      }}>
                        {costume.name}
                      </div>
                      <div style={{
                        fontFamily: 'Verdana, sans-serif',
                        fontSize: '12px',
                        color: '#5d4037',
                      }}>
                        {costume.description}
                      </div>
                    </div>
                  </label>
                ))}

                <div style={{ textAlign: 'center' }}>
                  <button
                    className="vote-btn"
                    onClick={handleVote}
                    disabled={!selected}
                    style={{
                      opacity: selected ? 1 : 0.5,
                      cursor: selected ? 'pointer' : 'not-allowed',
                    }}
                  >
                    {'ПРОГОЛОСОВАТЬ!'}
                  </button>
                </div>
              </>
            ) : (
              <div style={{
                textAlign: 'center',
                padding: '30px',
                background: '#e8f5e9',
                border: '2px solid #a5d6a7',
                borderRadius: '8px',
              }}>
                <div style={{
                  fontSize: '40px',
                  marginBottom: '10px',
                }}>
                  {'✓'}
                </div>
                <div style={{
                  fontFamily: 'Arial Black, Arial, sans-serif',
                  fontSize: '18px',
                  color: '#2e7d32',
                  marginBottom: '8px',
                }}>
                  {'Спасибо за ваш голос!'}
                </div>
                <div style={{
                  fontFamily: 'Verdana, sans-serif',
                  fontSize: '13px',
                  color: '#5d4037',
                }}>
                  {`Вы проголосовали за: "${costumes.find(c => c.id === selected)?.name}"`}
                </div>
                <div style={{
                  marginTop: '10px',
                  fontSize: '12px',
                  color: '#888',
                  fontStyle: 'italic',
                  fontFamily: 'Verdana, sans-serif',
                }}>
                  {'Давид будет доволен (или нет)'}
                </div>
                <a
                  href="/"
                  className="xp-button"
                  style={{
                    display: 'inline-block',
                    width: 'auto',
                    marginTop: '16px',
                    textDecoration: 'none',
                    textAlign: 'center',
                    padding: '10px 24px',
                  }}
                >
                  {'← Вернуться на главную'}
                </a>
              </div>
            )}

            <div style={{
              marginTop: '14px',
              textAlign: 'center',
              fontSize: '11px',
              color: '#888',
              fontFamily: 'Verdana, sans-serif',
            }}>
              {'Голосование открыто до 1 марта 2026'}
              <br />
              {'Результаты будут объявлены на корпоративе!'}
            </div>
          </div>
        </div>
      </div>

      <RetroFooter />
    </div>
  )
}
