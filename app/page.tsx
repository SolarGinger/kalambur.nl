import { RetroHeader } from '@/components/retro-header'
import { LeftMenu } from '@/components/left-menu'
import { NewsSection } from '@/components/news-section'
import { RightColumn } from '@/components/right-column'
import { RetroFooter } from '@/components/retro-footer'

export default function Home() {
  return (
    <div style={{ maxWidth: '1024px', margin: '0 auto' }}>
      <RetroHeader />

      {/* Main 3-column layout using table */}
      <div style={{
        display: 'flex',
        gap: '10px',
        padding: '10px',
        alignItems: 'flex-start',
      }}>
        {/* Left column - Menu */}
        <div style={{ width: '180px', flexShrink: 0 }}>
          <LeftMenu />
        </div>

        {/* Center column - News */}
        <div style={{ flex: 1, minWidth: 0 }} id="news">
          <NewsSection />
        </div>

        {/* Right column - Calendar + Horoscope */}
        <div style={{ width: '200px', flexShrink: 0 }}>
          <RightColumn />
        </div>
      </div>

      <RetroFooter />
    </div>
  )
}
