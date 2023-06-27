import { getServerSession } from 'next-auth'
import { NextResponse } from 'next/server'
import { authOptions } from '../auth/[...nextauth]/route'

import posts from '@/services/data/posts.json'

export async function GET() {
  const session = await getServerSession(authOptions)

  if (!session) {
    return NextResponse.json(
      { message: 'You are not authorize to see this data' },
      { status: 401 }
    )
  }

  return NextResponse.json({ data: posts }, { status: 202 })
}
