import { NextResponse } from 'next/server'

function getMoonPhase(): { phase: string; emoji: string; illumination: number } {
  const now = new Date()
  // Synodic month calculation (based on known new moon: Jan 6, 2000)
  const knownNewMoon = new Date(2000, 0, 6, 18, 14, 0)
  const synodicMonth = 29.53058867
  const daysSinceKnown = (now.getTime() - knownNewMoon.getTime()) / (1000 * 60 * 60 * 24)
  const lunarAge = ((daysSinceKnown % synodicMonth) + synodicMonth) % synodicMonth

  // Illumination approximation
  const illumination = Math.round((1 - Math.cos((2 * Math.PI * lunarAge) / synodicMonth)) / 2 * 100)

  if (lunarAge < 1.85) return { phase: 'новолуние', emoji: '\uD83C\uDF11', illumination }
  if (lunarAge < 7.38) return { phase: 'растущий серп', emoji: '\uD83C\uDF12', illumination }
  if (lunarAge < 9.23) return { phase: 'первая четверть', emoji: '\uD83C\uDF13', illumination }
  if (lunarAge < 14.77) return { phase: 'растущая луна', emoji: '\uD83C\uDF14', illumination }
  if (lunarAge < 16.61) return { phase: 'полнолуние', emoji: '\uD83C\uDF15', illumination }
  if (lunarAge < 22.15) return { phase: 'убывающая луна', emoji: '\uD83C\uDF16', illumination }
  if (lunarAge < 24.0) return { phase: 'последняя четверть', emoji: '\uD83C\uDF17', illumination }
  if (lunarAge < 27.69) return { phase: 'убывающий серп', emoji: '\uD83C\uDF18', illumination }
  return { phase: 'новолуние', emoji: '\uD83C\uDF11', illumination }
}

export async function GET() {
  const moon = getMoonPhase()
  return NextResponse.json(moon)
}
