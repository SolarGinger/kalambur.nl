import { NextResponse } from 'next/server'

const FALLBACK = {
  temp: 6,
  description: 'облачно',
  icon: '04d',
}

export async function GET() {
  try {
    // Use Open-Meteo (no API key needed)
    const res = await fetch(
      'https://api.open-meteo.com/v1/forecast?latitude=52.3676&longitude=4.9041&current=temperature_2m,weather_code&timezone=Europe%2FAmsterdam',
      { next: { revalidate: 1800 } }
    )
    if (!res.ok) throw new Error('Weather API error')
    const data = await res.json()

    const temp = Math.round(data.current.temperature_2m)
    const code = data.current.weather_code as number

    // WMO weather code to Russian description + icon
    const weatherMap: Record<number, { description: string; icon: string }> = {
      0: { description: 'ясно', icon: '01d' },
      1: { description: 'малооблачно', icon: '02d' },
      2: { description: 'облачно', icon: '03d' },
      3: { description: 'пасмурно', icon: '04d' },
      45: { description: 'туман', icon: '50d' },
      48: { description: 'туман', icon: '50d' },
      51: { description: 'морось', icon: '09d' },
      53: { description: 'морось', icon: '09d' },
      55: { description: 'морось', icon: '09d' },
      61: { description: 'дождь', icon: '10d' },
      63: { description: 'дождь', icon: '10d' },
      65: { description: 'ливень', icon: '10d' },
      71: { description: 'снег', icon: '13d' },
      73: { description: 'снег', icon: '13d' },
      75: { description: 'снегопад', icon: '13d' },
      80: { description: 'ливень', icon: '09d' },
      81: { description: 'ливень', icon: '09d' },
      82: { description: 'гроза', icon: '11d' },
      95: { description: 'гроза', icon: '11d' },
      96: { description: 'гроза с градом', icon: '11d' },
      99: { description: 'гроза с градом', icon: '11d' },
    }

    const weather = weatherMap[code] || { description: 'облачно', icon: '04d' }

    return NextResponse.json({
      temp,
      description: weather.description,
      icon: weather.icon,
    })
  } catch {
    return NextResponse.json(FALLBACK)
  }
}
