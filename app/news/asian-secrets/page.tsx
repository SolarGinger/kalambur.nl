'use client'

import Image from 'next/image'
import { ArticleLayout } from '@/components/article-layout'

export default function AsianSecretsPage() {
  return (
    <ArticleLayout>
      <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: 0, border: '3px solid #ffb74d', background: '#fffde7', boxShadow: '3px 3px 8px rgba(0,0,0,0.15)' }}>
        <thead>
          <tr>
            <th style={{ background: 'linear-gradient(to bottom, #ffcc80, #ffa726)', color: '#4e342e', fontFamily: "'Arial Black', Arial, sans-serif", fontSize: '18px', padding: '10px 14px', textAlign: 'left', borderBottom: '3px solid #e65100' }}>
              {'12 СЕКРЕТОВ ЗНАКОМСТВА С АЗИАТКАМИ, КОТОРЫЕ ИЗМЕНЯТ ЖИЗНЬ!'}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ padding: '14px', fontFamily: 'Verdana, sans-serif', fontSize: '13px', lineHeight: '1.7' }}>
              {/* Author info */}
              <div style={{ background: '#fff9c4', border: '2px dashed #ffb74d', padding: '10px', marginBottom: '14px', borderRadius: '4px' }}>
                <div style={{ fontFamily: "'Arial Black', Arial, sans-serif", fontSize: '12px', color: '#d84315' }}>
                  {'Автор: Игорь Пугачёв (@spnlck \u2014 Азиатки по Фрейду)'}
                </div>
                <div style={{ fontSize: '11px', color: '#795548', fontStyle: 'italic', marginTop: '2px' }}>
                  {'Эксклюзив kalambur.nl, Амстердам, 10 февраля 2026 года'}
                </div>
              </div>

              <p style={{ fontWeight: 'bold', fontSize: '14px', color: '#d84315', marginBottom: '10px' }}>
                {'РАСследование ШОКирующих методов знакомства, проверенных на 147 женщинах!'}
              </p>

              <p style={{ marginBottom: '10px' }}>
                {'АМСТЕРДАМ! Пока вы потягиваете пятый Heineken в ирландском пабе на Leidseplein, ваши более удачливые соседи уже завтракают с очаровательными кореянками, японками и вьетнамками в уютных кафе Vondelpark.'}
              </p>

              <p style={{ marginBottom: '14px' }}>
                {'Кто стоит за этим таинственным феноменом массовых "азиатских успехов"? Ответ прост и шокирует: Игорь Пугачёв (@spnlck), признанный гуру знакомств с азиатскими женщинами в Бенелюксе.'}
              </p>

              {/* Photos 2x2 */}
              <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '14px' }}>
                <tbody>
                  <tr>
                    <td style={{ padding: '4px', textAlign: 'center', width: '50%' }}>
                      <Image src="/images/sushi-table.jpg" alt="Секретная таблица суши" width={240} height={170} style={{ border: '3px solid #ffb74d', borderRadius: '4px', objectFit: 'cover', width: '100%', height: 'auto' }} />
                      <div style={{ fontSize: '9px', color: '#888', fontStyle: 'italic' }}>{'Таблица расшифровки суши'}</div>
                    </td>
                    <td style={{ padding: '4px', textAlign: 'center', width: '50%' }}>
                      <Image src="/images/chopsticks.jpg" alt="Хват палочек" width={240} height={170} style={{ border: '3px solid #a5d6a7', borderRadius: '4px', objectFit: 'cover', width: '100%', height: 'auto' }} />
                      <div style={{ fontSize: '9px', color: '#888', fontStyle: 'italic' }}>{'Правильный хват палочек'}</div>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: '4px', textAlign: 'center', width: '50%' }}>
                      <Image src="/images/vondelpark.jpg" alt="Сакура в Vondelpark" width={240} height={170} style={{ border: '3px solid #ce93d8', borderRadius: '4px', objectFit: 'cover', width: '100%', height: 'auto' }} />
                      <div style={{ fontSize: '9px', color: '#888', fontStyle: 'italic' }}>{'Сакура в Vondelpark'}</div>
                    </td>
                    <td style={{ padding: '4px', textAlign: 'center', width: '50%' }}>
                      <Image src="/images/asian-food.jpg" alt="Азиатская кухня" width={240} height={170} style={{ border: '3px solid #ef9a9a', borderRadius: '4px', objectFit: 'cover', width: '100%', height: 'auto' }} />
                      <div style={{ fontSize: '9px', color: '#888', fontStyle: 'italic' }}>{'Кулинарный путь к сердцу'}</div>
                    </td>
                  </tr>
                </tbody>
              </table>

              {/* Secret 1 */}
              <table style={{ width: '100%', border: '2px solid #ffcc80', marginBottom: '10px', background: '#fff8e1' }}>
                <tbody>
                  <tr><td style={{ background: '#ffcc80', fontFamily: "'Arial Black', Arial, sans-serif", fontSize: '13px', color: '#4e342e', padding: '6px 10px' }}>{'СЕКРЕТ \u21161: "Аниёнг" вместо "hallo" \u2014 +300% успеха'}</td></tr>
                  <tr><td style={{ padding: '8px 10px', fontSize: '13px' }}>{'"Первая ошибка всех голландцев \u2014 стандартное приветствие. Скажите \'аниёнг\' любой азиатке \u2014 и вы автоматически становитесь \'своим\'."'}</td></tr>
                </tbody>
              </table>

              {/* Secret 2 */}
              <table style={{ width: '100%', border: '2px solid #a5d6a7', marginBottom: '10px', background: '#e8f5e9' }}>
                <tbody>
                  <tr><td style={{ background: '#a5d6a7', fontFamily: "'Arial Black', Arial, sans-serif", fontSize: '13px', color: '#1b5e20', padding: '6px 10px' }}>{'СЕКРЕТ \u21162: Кумыс после 22:00 = капсула времени'}</td></tr>
                  <tr><td style={{ padding: '8px 10px', fontSize: '13px' }}>{'Азиатки обладают феноменальным обонянием и чуют кумыс на расстоянии 3 километров. "После 10 вечера пейте только зелёный чай или соджу."'}</td></tr>
                </tbody>
              </table>

              {/* Secret 3 */}
              <table style={{ width: '100%', border: '2px solid #ce93d8', marginBottom: '10px', background: '#f3e5f5' }}>
                <tbody>
                  <tr><td style={{ background: '#ce93d8', fontFamily: "'Arial Black', Arial, sans-serif", fontSize: '13px', color: '#4a148c', padding: '6px 10px' }}>{'СЕКРЕТ \u21163: Фрейд прав \u2014 ищите внутреннего дракона'}</td></tr>
                  <tr><td style={{ padding: '8px 10px', fontSize: '13px' }}>{'"Азиатская женщина subconsciously ищет в мужчине сильного лидера, внутреннего \'дракона\'." Метод проверен на 147 представительницах.'}</td></tr>
                </tbody>
              </table>

              {/* Secret 4 */}
              <table style={{ width: '100%', border: '2px solid #ffcc80', marginBottom: '10px', background: '#fff8e1' }}>
                <tbody>
                  <tr><td style={{ background: '#ffcc80', fontFamily: "'Arial Black', Arial, sans-serif", fontSize: '13px', color: '#4e342e', padding: '6px 10px' }}>{'СЕКРЕТ \u21164: "Забытый" кошелёк = тест на порядочность'}</td></tr>
                  <tr><td style={{ padding: '8px 10px', fontSize: '13px' }}>{'В первый вечер "случайно забудьте" кошелёк. "Настоящая азиатка никогда не обидится. Древний тест на порядочность, уходящий в конфуцианство."'}</td></tr>
                </tbody>
              </table>

              {/* Secret 5 */}
              <table style={{ width: '100%', border: '2px solid #ef9a9a', marginBottom: '10px', background: '#fce4ec' }}>
                <tbody>
                  <tr><td style={{ background: '#ef9a9a', fontFamily: "'Arial Black', Arial, sans-serif", fontSize: '13px', color: '#b71c1c', padding: '6px 10px' }}>{'СЕКРЕТ \u21165: Суши как секретный код'}</td></tr>
                  <tr><td style={{ padding: '8px 10px', fontSize: '13px' }}>{'Филадельфия = "вы мне нравитесь", Калифорния = "давайте дружить", Дракон = "я готова к серьёзному". Учить таблицу расшифровки \u2014 2 недели.'}</td></tr>
                </tbody>
              </table>

              {/* Secret 6 */}
              <table style={{ width: '100%', border: '2px solid #a5d6a7', marginBottom: '10px', background: '#e8f5e9' }}>
                <tbody>
                  <tr><td style={{ background: '#a5d6a7', fontFamily: "'Arial Black', Arial, sans-serif", fontSize: '13px', color: '#1b5e20', padding: '6px 10px' }}>{'СЕКРЕТ \u21166: Палочки = оружие самурая'}</td></tr>
                  <tr><td style={{ padding: '8px 10px', fontSize: '13px' }}>{'"Держите палочки не как вилку, а как ниндзя перед боем. Этот жест добавляет +500 очков маскулинности."'}</td></tr>
                </tbody>
              </table>

              {/* Secret 7 */}
              <table style={{ width: '100%', border: '2px solid #ce93d8', marginBottom: '10px', background: '#f3e5f5' }}>
                <tbody>
                  <tr><td style={{ background: '#ce93d8', fontFamily: "'Arial Black', Arial, sans-serif", fontSize: '13px', color: '#4a148c', padding: '6px 10px' }}>{'СЕКРЕТ \u21167: K-Pop как универсальный пароль'}</td></tr>
                  <tr><td style={{ padding: '8px 10px', fontSize: '13px' }}>{'Напойте припев BTS или BLACKPINK \u2014 азиатки растают мгновенно. "Я познакомился с кореянкой в HEMA, пропев \'Dynamite\'."'}</td></tr>
                </tbody>
              </table>

              {/* Secret 8 */}
              <table style={{ width: '100%', border: '2px solid #ffcc80', marginBottom: '10px', background: '#fff8e1' }}>
                <tbody>
                  <tr><td style={{ background: '#ffcc80', fontFamily: "'Arial Black', Arial, sans-serif", fontSize: '13px', color: '#4e342e', padding: '6px 10px' }}>{'СЕКРЕТ \u21168: Священное время 7:11 вечера'}</td></tr>
                  <tr><td style={{ padding: '8px 10px', fontSize: '13px' }}>{'87% успешных знакомств происходят после 19:00 11-го числа каждого месяца. "Числа 7 и 11 \u2014 магнит для азиатских женщин."'}</td></tr>
                </tbody>
              </table>

              {/* Secret 9 */}
              <table style={{ width: '100%', border: '2px solid #ef9a9a', marginBottom: '10px', background: '#fce4ec' }}>
                <tbody>
                  <tr><td style={{ background: '#ef9a9a', fontFamily: "'Arial Black', Arial, sans-serif", fontSize: '13px', color: '#b71c1c', padding: '6px 10px' }}>{'СЕКРЕТ \u21169: Рисовые шарики = ключ к сердцу'}</td></tr>
                  <tr><td style={{ padding: '8px 10px', fontSize: '13px' }}>{'Кормите её онгири или тамаго \u2014 древний японский ритуал доверия. "Через рис можно завоевать любую азиатку."'}</td></tr>
                </tbody>
              </table>

              {/* Secret 10 */}
              <table style={{ width: '100%', border: '2px solid #a5d6a7', marginBottom: '10px', background: '#e8f5e9' }}>
                <tbody>
                  <tr><td style={{ background: '#a5d6a7', fontFamily: "'Arial Black', Arial, sans-serif", fontSize: '13px', color: '#1b5e20', padding: '6px 10px' }}>{'СЕКРЕТ \u211610: Взгляд исподтишка, НИКОГДА прямо'}</td></tr>
                  <tr><td style={{ padding: '8px 10px', fontSize: '13px' }}>{'Прямой взгляд в азиатских культурах = вызов на дуэль. Смотрите украдкой, через плечо.'}</td></tr>
                </tbody>
              </table>

              {/* Secret 11 */}
              <table style={{ width: '100%', border: '2px solid #ce93d8', marginBottom: '10px', background: '#f3e5f5' }}>
                <tbody>
                  <tr><td style={{ background: '#ce93d8', fontFamily: "'Arial Black', Arial, sans-serif", fontSize: '13px', color: '#4a148c', padding: '6px 10px' }}>{'СЕКРЕТ \u211611: Vondelpark \u2014 золотая зона знакомств'}</td></tr>
                  <tr><td style={{ padding: '8px 10px', fontSize: '13px' }}>{'87% знакомств с азиатками происходят именно здесь, особенно под сакурой (даже зимой).'}</td></tr>
                </tbody>
              </table>

              {/* Secret 12 */}
              <table style={{ width: '100%', border: '2px solid #ffcc80', marginBottom: '10px', background: '#fff8e1' }}>
                <tbody>
                  <tr><td style={{ background: '#ffcc80', fontFamily: "'Arial Black', Arial, sans-serif", fontSize: '13px', color: '#4e342e', padding: '6px 10px' }}>{'СЕКРЕТ \u211612: Подписка на @spnlck = главный секрет'}</td></tr>
                  <tr><td style={{ padding: '8px 10px', fontSize: '13px' }}>{'"Все остальные секреты \u2014 в приватных сообщениях подписчиков." За год аккаунт вырос с 12 до 2470 фолловеров.'}</td></tr>
                </tbody>
              </table>

              {/* Conspiracy */}
              <div style={{ background: '#fff9c4', border: '3px dashed #d84315', padding: '12px', marginTop: '14px', marginBottom: '14px', borderRadius: '4px' }}>
                <div style={{ fontFamily: "'Arial Black', Arial, sans-serif", fontSize: '14px', color: '#d84315', marginBottom: '6px' }}>{'КОНСПИРОЛОГИЧЕСКИЙ АСПЕКТ'}</div>
                <p>{'Почему нидерландские СМИ игнорируют открытия @spnlck? Кто стоит за цензурой? Редакция kalambur.nl проведёт собственное расследование!'}</p>
              </div>

              {/* Witnesses */}
              <div style={{ background: '#e8eaf6', border: '2px solid #7986cb', padding: '10px', borderRadius: '4px', marginBottom: '14px' }}>
                <div style={{ fontFamily: "'Arial Black', Arial, sans-serif", fontSize: '12px', color: '#283593', marginBottom: '4px' }}>{'СЛОВА ОЧЕВИДЦЕВ'}</div>
                <p style={{ fontStyle: 'italic' }}>{'Тётя Люба, Amstelveen: "Игорь прав! Кореянки из окон смотрят на русских мужчин с особым интересом!"'}</p>
              </div>

              <div style={{ textAlign: 'center', fontSize: '11px', color: '#888', fontStyle: 'italic', borderTop: '1px dashed #ffb74d', paddingTop: '10px' }}>
                {'Опубликовано: 10.02.2026 | Просмотров: 14 789 | Комментариев: 342'}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </ArticleLayout>
  )
}
