import { NextRequest, NextResponse } from "next/server";
import { sendContactEmails } from "@/lib/email";

export async function POST(req: NextRequest) {
  const formData = await req.formData();

  const payload: Record<string, string> = {
    fullName: formData.get("fullName")?.toString() ?? "",
    company: formData.get("company")?.toString() ?? "",
    email: formData.get("email")?.toString() ?? "",
    phone: formData.get("phone")?.toString() ?? "",
    service: formData.get("service")?.toString() ?? "",
    preferredDateTime: formData.get("preferredDateTime")?.toString() ?? "",
    message: formData.get("message")?.toString() ?? "",
    language: formData.get("language")?.toString() ?? "",
    duration: formData.get("duration")?.toString() ?? "",
    agentsCount: formData.get("agentsCount")?.toString() ?? "",
    routeCoverage: formData.get("routeCoverage")?.toString() ?? "",
    signupType: formData.get("signupType")?.toString() ?? "",
    utmSource: formData.get("utm_source")?.toString() ?? "",
    utmMedium: formData.get("utm_medium")?.toString() ?? "",
    utmCampaign: formData.get("utm_campaign")?.toString() ?? "",
    // Note: attachments are available as File objects from formData.getAll("attachments")
  };

  console.log("New contact submission:", payload);

  try {
    await sendContactEmails(payload);
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Error sending contact email:", error);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}


