const SHEET_NAME = "ContactSubmissions";

function doPost(e) {
  try {
    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = getOrCreateSheet_(spreadsheet, SHEET_NAME);

    const payload = parsePayload_(e);
    const name = safeValue_(payload.name);
    const email = safeValue_(payload.email);
    const message = safeValue_(payload.message);
    const source = safeValue_(payload.source || "portfolio-contact-form");
    const submittedAt = safeValue_(payload.submittedAt || new Date().toISOString());

    sheet.appendRow([new Date(), submittedAt, name, email, message, source]);

    return HtmlService.createHtmlOutput(
      JSON.stringify({
        ok: true,
        message: "Submission saved",
      })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return HtmlService.createHtmlOutput(
      JSON.stringify({
        ok: false,
        message: error && error.message ? error.message : "Unknown error",
      })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  return HtmlService.createHtmlOutput(
    JSON.stringify({
      ok: true,
      message: "Google Sheets webhook is running",
    })
  ).setMimeType(ContentService.MimeType.JSON);
}

function doOptions() {
  return HtmlService.createHtmlOutput("").setMimeType(ContentService.MimeType.JSON);
}

function getOrCreateSheet_(spreadsheet, sheetName) {
  let sheet = spreadsheet.getSheetByName(sheetName);

  if (!sheet) {
    sheet = spreadsheet.insertSheet(sheetName);
    sheet.appendRow([
      "receivedAt",
      "submittedAt",
      "name",
      "email",
      "message",
      "source",
    ]);
  }

  return sheet;
}

function parsePayload_(e) {
  if (!e || !e.postData || !e.postData.contents) {
    throw new Error("Request body is empty");
  }

  let parsed;
  try {
    parsed = JSON.parse(e.postData.contents);
  } catch (_) {
    throw new Error("Request body must be valid JSON");
  }

  if (!parsed || typeof parsed !== "object") {
    throw new Error("Invalid payload");
  }

  return parsed;
}

function safeValue_(value) {
  if (value === null || value === undefined) {
    return "";
  }
  return String(value).trim();
}

function jsonResponse_(status, data) {
  const output = HtmlService.createHtmlOutput(JSON.stringify({
    status,
    ...data,
  }));

  output.setMimeType(ContentService.MimeType.JSON);
  return output;
}
