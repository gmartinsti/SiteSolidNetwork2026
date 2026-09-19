const WEBHOOK_URL = "https://n8n.wdoctor.com.br/webhook/6109c580-97ca-43d9-9eb6-6a5e1264c060";
const WEBHOOK_TOKEN = "sitesolidnetwork";

export type WebhookType = "Contato site" | "Agendamento";

export async function sendWebhook(tipo: WebhookType, data: Record<string, any>) {
  try {
    const res = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        solidsitecontato: WEBHOOK_TOKEN,
      },
      body: JSON.stringify({
        tipo,
        origem: tipo === "Agendamento" ? "site-solidnetwork-agendamento" : "site-solidnetwork",
        enviadoEm: new Date().toISOString(),
        ...data,
      }),
    });
    if (!res.ok) throw new Error(`Webhook failed: ${res.status}`);
    return true;
  } catch (err) {
    console.error("Erro ao enviar webhook:", err);
    throw err;
  }
}
