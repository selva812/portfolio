// app/api/project/[slug]/route.ts

import { prisma } from '@/lib/prisma'
import { NextResponse, NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    const url = new URL(request.url)
    const slug = url.pathname.split('/').pop() // Get slug from the URL

    if (!slug) {
      return NextResponse.json({ error: 'Slug is required' }, { status: 400 })
    }

    const project = await prisma.project.findUnique({
      where: { slug },
    })

    if (!project) {
      return NextResponse.json({ error: 'Project not found' }, { status: 404 })
    }

    return NextResponse.json({
      ...project,
      frontendTools: project.frontendTools ?? [],
      backendTools: project.backendTools ?? [],
      otherTools: project.otherTools ?? [],
      pictures: project.pictures ?? [],
    })

  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch project' },
      { status: 500 }
    )
  }
}
