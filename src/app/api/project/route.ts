// app/api/projects/route.ts
import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    
    const projects = await prisma.project.findMany({
      select: {
        id: true,
        title: true,
        slug: true,
        shortDescription: true,
        frontendTools: true,
        otherTools: true,
        backendTools: true,
        pictures: true,
        category: true,
      },
      orderBy: {
        id: 'asc',
      },
    });

    const projectsWithFirstPicture = projects.map((project: any) => ({
      ...project,
      frontendTools: project.frontendTools ?? [],
      backendTools: project.backendTools ?? [],
      pictures: project.pictures ?? [],
      picture:
        Array.isArray(project.pictures) && project.pictures.length > 0
          ? project.pictures[0]
          : null,
    }));

    return NextResponse.json(projectsWithFirstPicture);

  } catch (error) {
    console.error('API Route: Error fetching projects', error);
    
    // More detailed error information
    let errorMessage = 'Failed to fetch projects';
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    
    return NextResponse.json(
      { error: errorMessage, details: error },
      { status: 500 }
    );
  }
}