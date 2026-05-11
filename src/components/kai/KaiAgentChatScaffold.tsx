const suggestedPrompts = [
  "Summarize my data vault",
  "Help me plan my next action",
  "Explain what Kai can do",
];

export function KaiAgentChatScaffold() {
  return (
    <section className="rounded-2xl border bg-white/80 p-6 shadow-sm">
      <div className="mb-5">
        <KaiAgentChatScaffold />
        <p className="text-sm font-medium text-gray-500">Kai Agent</p>
        <h2 className="text-2xl font-semibold">Chat with your personal agent</h2>
        <p className="mt-2 text-sm text-gray-500">
          A UI preview for future Kai agent conversations.
        </p>
      </div>

      <div className="space-y-3 rounded-xl border bg-gray-50 p-4">
        <div className="max-w-[80%] rounded-2xl bg-white p-3 text-sm shadow-sm">
          Hi, I’m Kai. I can help you understand your data, preferences, and next steps.
        </div>

        <div className="ml-auto max-w-[80%] rounded-2xl bg-black p-3 text-sm text-white">
          What can you help me with?
        </div>

        <div className="max-w-[80%] rounded-2xl bg-white p-3 text-sm shadow-sm">
          I can help with consent-aware insights, product navigation, and personal knowledge workflows.
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {suggestedPrompts.map((prompt) => (
          <button
            key={prompt}
            type="button"
            className="rounded-full border px-3 py-1.5 text-sm hover:bg-gray-100"
          >
            {prompt}
          </button>
        ))}
      </div>

      <div className="mt-5 flex gap-2">
        <input
          disabled
          placeholder="Agent chat coming soon..."
          className="flex-1 rounded-xl border bg-gray-100 px-4 py-2 text-sm"
        />
        <button
          disabled
          className="rounded-xl bg-black px-4 py-2 text-sm text-white opacity-60"
        >
          Send
        </button>
      </div>
    </section>
  );
}