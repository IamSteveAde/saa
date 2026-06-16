import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

function formatNaira(value: number): string {
  if (value >= 1000000) {
    const m = value / 1000000;
    return `₦${m % 1 === 0 ? m.toFixed(0) : m.toFixed(1)}m`;
  }
  return `₦${(value / 1000).toFixed(0)}k`;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      businessType,
      budget,
      name,
      email,
      phone,
      company,
      industry,
      location,
      services,
      availability,
      message,
    } = body;

    const budgetLabel =
      budget >= (businessType === "established" ? 5000000 : 2000000)
        ? `${formatNaira(budget)}+`
        : formatNaira(budget);

    const availabilityMap: Record<string, string> = {
      today:      "Today — Ready immediately",
      tomorrow:   "Tomorrow — Next 24 hours",
      "this-week":"This week — Within 7 days",
      "next-week":"Next week — 7 to 14 days",
      flexible:   "Flexible — No rush",
    };

    const row = (label: string, value: string) => `
      <tr>
        <td style="padding:8px 0;width:40%;">
          <p style="margin:0;font-size:11px;color:rgba(0,0,0,0.38);font-weight:400;">${label}</p>
        </td>
        <td style="padding:8px 0;">
          <p style="margin:0;font-size:14px;color:#0A0A0A;font-weight:500;">${value}</p>
        </td>
      </tr>`;

    const sectionHeader = (title: string) => `
      <tr>
        <td colspan="2" style="padding-bottom:12px;border-bottom:1px solid rgba(0,0,0,0.07);">
          <p style="margin:0;font-size:10px;font-weight:500;letter-spacing:0.25em;text-transform:uppercase;color:rgba(0,0,0,0.3);">${title}</p>
        </td>
      </tr>
      <tr><td height="16"/></tr>`;

    const html = `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1"/>
<title>New Enquiry — Spotlite Africa</title>
</head>
<body style="margin:0;padding:0;background:#F8F7F4;font-family:Arial,sans-serif;">

  <table width="100%" cellpadding="0" cellspacing="0" style="background:#F8F7F4;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

          <!-- HEADER -->
          <tr>
            <td style="background:#0A0A0A;padding:32px 40px;border-radius:12px 12px 0 0;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <p style="margin:0;font-size:11px;font-weight:500;letter-spacing:0.25em;text-transform:uppercase;color:rgba(255,255,255,0.3);">
                      New Enquiry
                    </p>
                    <h1 style="margin:8px 0 0;font-size:24px;font-weight:500;color:#FFFFFF;letter-spacing:-0.02em;">
                      Spotlite <span style="color:#F5C842;">Africa</span>
                    </h1>
                  </td>
                  <td align="right" valign="middle">
                    <span style="display:inline-block;padding:6px 14px;border-radius:100px;font-size:11px;font-weight:500;letter-spacing:0.12em;text-transform:uppercase;background:${businessType === "established" ? "rgba(245,200,66,0.15)" : "rgba(232,136,26,0.15)"};color:${businessType === "established" ? "#F5C842" : "#E8881A"};">
                      ${businessType === "established" ? "Established Business" : "Emerging Brand"}
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- BODY -->
          <tr>
            <td style="background:#FFFFFF;padding:40px;border-left:1px solid rgba(0,0,0,0.06);border-right:1px solid rgba(0,0,0,0.06);">

              <!-- CONTACT DETAILS -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:32px;">
                ${sectionHeader("Contact details")}
                ${row("Full name", name)}
                ${row("Email address", `<a href="mailto:${email}" style="color:#0A0A0A;text-decoration:none;">${email}</a>`)}
                ${row("Phone number", `<a href="tel:${phone}" style="color:#0A0A0A;text-decoration:none;">${phone}</a>`)}
              </table>

              <!-- BUSINESS DETAILS -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:32px;">
                ${sectionHeader("Business details")}
                ${row("Company", company || "—")}
                ${row("Industry", industry || "—")}
                ${row("Location", location || "—")}
              </table>

              <!-- ENQUIRY DETAILS -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:32px;">
                ${sectionHeader("Enquiry details")}
                ${row("Business type", businessType === "established" ? "Established Business" : "Emerging Brand")}
                ${row("Monthly budget", budgetLabel + "/month")}
                ${row("Availability", availabilityMap[availability] ?? availability)}
              </table>

              <!-- SERVICES -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:32px;">
                ${sectionHeader("Services requested")}
                <tr>
                  <td>
                    <div style="display:flex;flex-wrap:wrap;gap:8px;">
                      ${(services as string[]).map(s => `
                        <span style="display:inline-block;padding:5px 12px;border-radius:100px;font-size:11px;font-weight:500;background:#0A0A0A;color:#F5C842;margin:3px 4px 3px 0;">${s}</span>
                      `).join("")}
                    </div>
                  </td>
                </tr>
              </table>

              <!-- MESSAGE -->
              ${message ? `
              <table width="100%" cellpadding="0" cellspacing="0">
                ${sectionHeader("Additional message")}
                <tr>
                  <td style="background:#F8F7F4;border-radius:8px;padding:16px;">
                    <p style="margin:0;font-size:14px;color:rgba(0,0,0,0.6);line-height:1.7;font-weight:300;">${message}</p>
                  </td>
                </tr>
              </table>
              ` : ""}

            </td>
          </tr>

          <!-- FOOTER -->
          <tr>
            <td style="background:#0A0A0A;padding:24px 40px;border-radius:0 0 12px 12px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <p style="margin:0;font-size:11px;color:rgba(255,255,255,0.25);line-height:1.6;">
                      Spotlite Africa Agency &nbsp;·&nbsp; Lagos, Nigeria &nbsp;·&nbsp; spotliteafrica.com
                    </p>
                  </td>
                  <td align="right">
                    <p style="margin:0;font-size:10px;font-weight:500;letter-spacing:0.2em;text-transform:uppercase;color:rgba(255,255,255,0.18);">
                      Strategy-first.
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>

</body>
</html>`;

    await resend.emails.send({
      from:    "Spotlite Africa <info@spotliteafrica.com>",
      to:      ["info@spotliteafrica.com"],
      replyTo: email,
      subject: `New enquiry — ${company || name} · ${industry || businessType} · ${budgetLabel}/month`,
      html,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { success: false, error: "Failed to send enquiry." },
      { status: 500 }
    );
  }
}