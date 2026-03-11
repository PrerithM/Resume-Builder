import { ResumeFormData } from "../types/resume";
import * as Print from "expo-print";
import * as Sharing from "expo-sharing";

// ─── Main HTML template ───────────────────────────────────────────────────────

export function generateResumeHTML(data: ResumeFormData): string {
  const photoContent = data.photoUri
    ? `<img src="${data.photoUri}" style="width:100%;height:100%;object-fit:cover;" />`
    : `<div style="display:flex;align-items:center;justify-content:center;width:100%;height:100%;color:#4a86e8;font-size:13px;font-weight:600;">Photo</div>`;

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <title>${data.name || "Resume"}</title>
  <style>
    @page { size: A4; margin: 0; }

    * { margin: 0; padding: 0; box-sizing: border-box; }

    html, body {
      width: 794px;
      height: 1123px;
      overflow: hidden;
      background: #dce8f8;
    }

    /* ── PAGE WRAPPER ── */
    .page {
      width: 794px;
      height: 1123px;
      padding: 18px 22px;
      display: flex;
      flex-direction: column;
      gap: 8px;
      font-family: "Segoe UI", Arial, sans-serif;
      font-size: 11px;
      color: #222;
      background: #dce8f8;
    }

    /* ── CARD ── white rounded with light blue border */
    .card {
      background: #ffffff;
      border-radius: 16px;
      border: 1.5px solid #c5d9f5;
      position: relative;
      overflow: hidden;
      display: flex;
      flex-direction: column;
    }

    /* card-body stretches inside flex card */
    .card-body {
      padding: 8px 18px 12px 18px;
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
    }

    /* ── PILL BADGE ── blue rounded pill in top-left of every card */
    .badge {
      display: inline-block;
      background: #4a86e8;
      color: #fff;
      font-weight: 700;
      font-size: 10px;
      letter-spacing: 0.7px;
      padding: 6px 20px;
      border-radius: 30px;
      margin: 10px 0 0 16px;
      flex-shrink: 0;
    }

    /* ── HEADER CARD: two-column layout ── */
    .header-layout {
      display: flex;
      flex-direction: row;
      flex: 1;
      overflow: hidden;
    }

    /* left pane: badge + contact table */
    .header-left {
      flex: 1;
      display: flex;
      flex-direction: column;
      padding: 0 0 12px 0;
    }

    .header-left .card-body {
      padding: 8px 12px 10px 18px;
      justify-content: flex-start;
    }

    /* right pane: photo box */
    .header-right {
      width: 130px;
      flex-shrink: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 14px 14px 14px 0;
    }

    .photo-box {
      width: 108px;
      height: 128px;
      border: 2px solid #4a86e8;
      border-radius: 12px;
      background: #e8f0fe;
      overflow: hidden;
    }

    /* ── TABLES ── */
    table {
      width: 100%;
      border-collapse: collapse;
    }
    td {
      padding: 3px 0;
      vertical-align: top;
      line-height: 1.5;
    }
    .td-label {
      width: 105px;
      color: #444;
    }
    .td-colon {
      width: 14px;
      color: #666;
    }
    .td-value {
      font-weight: 600;
      color: #111;
    }

    /* ── EDUCATION TWO-COLUMN ── */
    .edu-row {
      display: flex;
      align-items: baseline;
      padding: 3px 0;
    }
    .edu-left {
      display: flex;
      flex: 0 0 55%;
    }
    .edu-right {
      flex: 1;
      color: #444;
      white-space: nowrap;
    }
    .edu-right .yr-val {
      font-weight: 600;
      color: #111;
    }

    /* ── CERTIFICATION ── */
    .cert-text {
      color: #444;
      line-height: 1.65;
      margin-bottom: 14px;
      font-size: 10.5px;
    }
    .sig-row {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
    }
    .sig-line {
      display: inline-block;
      width: 120px;
      border-bottom: 1px solid #222;
      margin-left: 6px;
    }
  </style>
</head>
<body>
<div class="page">

  <!-- HEADER CARD -->
  <div class="card" style="flex:1;">
    <div class="header-layout">
      <!-- Left: badge + contact info -->
      <div class="header-left">
        <div class="badge">CURRICULUM VITAE</div>
        <div class="card-body">
          <table>
            <tr><td class="td-label">Name</td><td class="td-colon">:</td><td class="td-value">${data.name || ""}</td></tr>
            <tr><td class="td-label">Address</td><td class="td-colon">:</td><td class="td-value">${data.address || ""}</td></tr>
            <tr><td class="td-label">Mobile No.</td><td class="td-colon">:</td><td class="td-value">${data.mobileNo || ""}</td></tr>
            <tr><td class="td-label">Email</td><td class="td-colon">:</td><td class="td-value">${data.email || ""}</td></tr>
            <tr><td class="td-label">Apply for</td><td class="td-colon">:</td><td class="td-value">${data.applyFor || ""}</td></tr>
          </table>
        </div>
      </div>
      <!-- Right: photo -->
      <div class="header-right">
        <div class="photo-box">${photoContent}</div>
      </div>
    </div>
  </div>

  <!-- ═══ PERSONAL DATA ═══ -->
  <div class="card" style="flex:1;">
    <div class="badge">PERSONAL DATA</div>
    <div class="card-body">
      <table>
        <tr>
          <td class="td-label">Nationality</td>
          <td class="td-colon">:</td>
          <td class="td-value">${data.nationality || ""}</td>
        </tr>
        <tr>
          <td class="td-label">Gender</td>
          <td class="td-colon">:</td>
          <td class="td-value">${data.gender || ""}</td>
        </tr>
        <tr>
          <td class="td-label">Marital Status</td>
          <td class="td-colon">:</td>
          <td class="td-value">${data.maritalStatus || ""}</td>
        </tr>
        <tr>
          <td class="td-label">Date of Birth</td>
          <td class="td-colon">:</td>
          <td class="td-value">${data.dob || ""}</td>
        </tr>
      </table>
    </div>
  </div>

  <!-- ═══ EDUCATION ═══ -->
  <div class="card" style="flex:1;">
    <div class="badge">EDUCATION</div>
    <div class="card-body">
      <!-- Elementary row -->
      <div class="edu-row">
        <div class="edu-left">
          <span class="td-label">Elementary</span>
          <span class="td-colon">&nbsp;:&nbsp;</span>
          <span class="td-value">${data.elementary || ""}</span>
        </div>
        <div class="edu-right">Year Graduated:&nbsp;<span class="yr-val">${data.elementaryYear || ""}</span></div>
      </div>
      <!-- High School row -->
      <div class="edu-row">
        <div class="edu-left">
          <span class="td-label">High School</span>
          <span class="td-colon">&nbsp;:&nbsp;</span>
          <span class="td-value">${data.highSchool || ""}</span>
        </div>
        <div class="edu-right">Year Graduated:&nbsp;<span class="yr-val">${data.highSchoolYear || ""}</span></div>
      </div>
      <!-- College, Course, Special Skills -->
      <table style="margin-top:2px;">
        <tr>
          <td class="td-label">College</td>
          <td class="td-colon">:</td>
          <td class="td-value">${data.college || ""}</td>
        </tr>
        <tr>
          <td class="td-label">Course</td>
          <td class="td-colon">:</td>
          <td class="td-value">${data.course || ""}</td>
        </tr>
        <tr>
          <td class="td-label">Special Skills</td>
          <td class="td-colon">:</td>
          <td class="td-value">${data.specialSkills || ""}</td>
        </tr>
      </table>
    </div>
  </div>

  <!-- ═══ WORK EXPERIENCE ═══ -->
  <div class="card" style="flex:1;">
    <div class="badge">WORK EXPERIENCE</div>
    <div class="card-body">
      <div style="line-height:1.65;white-space:pre-wrap;color:#333;">${(data.experience || "").replace(/\n/g, "<br/>")}</div>
    </div>
  </div>

  <!-- ═══ APPLICANT CERTIFICATION ═══ -->
  <div class="card" style="flex:1;">
    <div class="badge">APPLICANT CERTIFICATION</div>
    <div class="card-body">
      <div class="cert-text">
        I hereby certify that the above information is true and correct to the best of my knowledge and belief. I also understand that any misinterpretation will be considered sufficient reason for withdrawal of an offer or subsequent dismissal if employed.
      </div>
      <div class="sig-row">
        <div>Date:&nbsp;&nbsp;${data.certificationDate || "--/--/------"}</div>
        <div>Signature<span class="sig-line"></span></div>
      </div>
    </div>
  </div>

</div>
</body>
</html>
  `.trim();
}

// ─── Export function ──────────────────────────────────────────────────────────

export async function exportPDF(data: ResumeFormData): Promise<string> {
  const html = generateResumeHTML(data);

  const { uri } = await Print.printToFileAsync({
    html,
    base64: false,
  });

  return uri;
}
