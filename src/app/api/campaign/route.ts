import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // 1. Connect to MongoDB
    const client = await clientPromise;
    const db = client.db("outwrite");

    // 2. Insert the Brief into a collection named 'campaign_briefs'
    const result = await db.collection("campaign_briefs").insertOne({
      ...data,
      submittedAt: new Date(),
      status: 'pending_review'
    });

    // 3. Return Success
    return NextResponse.json({ 
      success: true, 
      message: "Brief stored successfully",
      id: result.insertedId 
    });

  } catch (error) {
    console.error("Database Error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to store brief" },
      { status: 500 }
    );
  }
}