import { NextResponse } from "next/server";

export const GET = async (
  req: Request,
  { params }: { params: Promise<{ blogId: string }> }
) => {
  const blogId = await params;

  return NextResponse.json(blogId);
};
