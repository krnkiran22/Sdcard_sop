import Image from "next/image";

const BAD_REF_IMAGES = [
  "01.jpeg",
  "02.jpeg",
  "03.jpeg",
  "04.jpeg",
  "05.jpeg",
  "06.jpeg",
  "07.jpeg",
  "08.jpeg",
  "09.jpeg",
  "10.jpeg",
  "11.jpeg",
  "12.jpeg",
  "13.jpeg",
];

export default function Home() {
  const mandatoryFields = [
    {
      name: "Date",
      guidance: "Write as DD/MM/YYYY",
      example: "Date: 07/04/2026",
      note: "Use the date recording was completed.",
    },
    {
      name: "Factory Name",
      guidance: "Write the full name",
      example: "Factory Name: XYZ Factory",
      note: "Do not write only 'factory name'.",
    },
    {
      name: "Team Name",
      guidance: "Write the full team name",
      example: "Team Name: ABC Team",
      note: "Do not write only 'team name'.",
    },
    {
      name: "SD Card Count",
      guidance: "Write the exact number inside",
      example: "SD Count: 46",
      note: "Count before sealing.",
    },
    {
      name: "Mobile Number (strongly recommended)",
      guidance: "Write a number we can reach you on",
      example: "Mobile: 0987654321",
      note: "If anything on the label is hard to read, we can call you to fix it. In the worst case, at least the mobile number should be clear.",
    },
  ];

  const doItems = [
    "Write on white paper using a blue/black pen.",
    "Place the paper label INSIDE the packet (so it does not get erased).",
    "Write clearly in block letters.",
    "Double-check your count before sealing.",
  ];

  const dontItems = [
    "Do not write directly on plastic/polythene with marker (it gets erased when touched).",
    "Do not leave any field blank.",
    "Do not write abbreviations only - always write the full name.",
    "Do not seal the packet without counting the SD cards.",
  ];

  const packingSteps = [
    "Count all SD cards carefully.",
    "Place SD cards into the ziplock bag - do not leave any loose outside.",
    "Write all 4 fields on a paper label.",
    "Place the paper label INSIDE the bag (not outside).",
    "Seal the bag completely - press the ziplock shut fully.",
    "If no ziplock seal, fold and tape the bag shut securely.",
    "Do a final check: shake the bag - nothing should fall out.",
  ];

  const mistakes = [
    {
      wrong: "Writing 'Factory Name' without the actual name",
      right: "Writing 'Factory Name: XYZ Factory'",
    },
    {
      wrong: "Writing date as '23/3'",
      right: "Writing date as '23/03/2026'",
    },
    {
      wrong: "Writing on plastic with marker",
      right: "Writing on paper placed inside bag",
    },
    {
      wrong: "Count on label says 46, bag has 40",
      right: "Count verified - label matches actual cards",
    },
    {
      wrong: "Bag is open/spilled",
      right: "Bag fully sealed before handover",
    },
    {
      wrong: "No team name written",
      right: "Team Name: ABC Team clearly written",
    },
  ];

  return (
    <main className="bg-background text-foreground mx-auto min-h-screen w-full max-w-6xl px-4 py-6 sm:px-6 sm:py-8 lg:px-10 print:max-w-none print:bg-white print:p-6">
      <header className="border-border bg-card rounded-2xl border p-5 shadow-[0_2px_16px_rgba(0,0,0,0.06)] sm:p-8 print:shadow-none">
        <p className="text-subtle-foreground font-mono text-[10px] font-semibold uppercase tracking-[0.08em] sm:text-xs">
          Standard Operating Procedure
        </p>
        <h1 className="mt-2 text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl">
          SD Card Return - Packaging SOP
        </h1>
        <p className="text-muted-foreground mt-3 text-lg sm:text-2xl">
          Follow these steps before returning your SD card package.
        </p>
      </header>

      <section className="border-border bg-card mt-6 rounded-2xl border p-5 shadow-[0_2px_16px_rgba(0,0,0,0.06)] sm:mt-8 sm:p-8 print:shadow-none">
        <h2 className="text-2xl font-bold sm:text-3xl">
          This is for you — pay, hours, and your results
        </h2>
        <p className="text-muted-foreground mt-3 text-base sm:text-xl">
          We want to pay you fairly for the hours you put in. When factory name,
          team name, date, and count are written clearly on the package, we can
          match your SD cards to you during ingestion. That way your work is
          assigned only to you, and you get the correct outcome for what you
          recorded.
        </p>
        <p className="text-muted-foreground mt-3 text-base sm:text-xl">
          If something is missing or unclear, we may not be able to link the
          package to the right person — and that can affect how your hours and
          payment are settled. Please write everything fully; add your mobile
          number so we can call you if we have any doubt and sort it out
          quickly.
        </p>
      </section>

      <section className="border-border bg-card mt-6 rounded-2xl border p-5 shadow-[0_2px_16px_rgba(0,0,0,0.06)] sm:mt-8 sm:p-8 print:shadow-none">
        <h2 className="text-2xl font-bold sm:text-3xl">
          1) What to Write on the Label (Mandatory Fields)
        </h2>
        <p className="text-muted-foreground mt-3 text-base sm:text-xl">
          Every returned packet must contain a paper label with the four main
          fields below. Also add your mobile number so we can reach you if
          needed.
        </p>

        <div className="border-border-strong bg-muted mt-5 rounded-xl border-2 border-dashed p-4 sm:p-6">
          <p className="text-subtle-foreground font-mono text-[10px] font-semibold uppercase tracking-[0.06em] sm:text-xs">
            Label Template
          </p>
          <p className="mt-2 text-lg font-bold sm:text-2xl">Fill each line</p>
          <div className="mt-3 space-y-3 text-base sm:text-xl">
            {mandatoryFields.map((field) => (
              <div
                key={field.name}
                className="border-border bg-card rounded-lg border p-3 sm:p-4"
              >
                <p className="font-semibold">{field.name}</p>
                <p className="text-muted-foreground">{field.guidance}</p>
                <p className="text-foreground font-bold">{field.example}</p>
                <p className="text-subtle-foreground">{field.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-6 grid gap-4 sm:mt-8 sm:grid-cols-2">
        <div className="bg-success-bg border-success/30 rounded-2xl border p-5 sm:p-7">
          <h2 className="text-success text-2xl font-bold sm:text-3xl">
            2) How to Write the Label - DO THIS
          </h2>
          <ul className="text-foreground mt-4 space-y-3 text-base sm:text-xl">
            {doItems.map((item) => (
              <li key={item} className="flex gap-3">
                <span aria-hidden="true" className="text-success font-bold">
                  ✅
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-destructive-bg border-destructive/25 rounded-2xl border p-5 sm:p-7">
          <h2 className="text-destructive text-2xl font-bold sm:text-3xl">
            3) How to Write the Label - DO NOT DO THIS
          </h2>
          <ul className="text-foreground mt-4 space-y-3 text-base sm:text-xl">
            {dontItems.map((item) => (
              <li key={item} className="flex gap-3">
                <span aria-hidden="true" className="text-destructive font-bold">
                  ❌
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-border bg-card mt-6 rounded-2xl border p-5 shadow-[0_2px_16px_rgba(0,0,0,0.06)] sm:mt-8 sm:p-8 print:shadow-none">
        <h2 className="text-2xl font-bold sm:text-3xl">
          4) Bad reference — real photos (do not repeat these mistakes)
        </h2>
        <p className="text-muted-foreground mt-3 text-base sm:text-xl">
          These are examples of packages or labels that caused problems. Your
          packet should not look like this: unclear writing, missing names,
          wrong surface, or incomplete information.
        </p>
        <p className="text-subtle-foreground mt-2 text-sm sm:text-base">
          Good package examples will be added here soon.
        </p>
        <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {BAD_REF_IMAGES.map((file, i) => (
            <figure
              key={file}
              className="border-border bg-card overflow-hidden rounded-xl border shadow-[0_2px_16px_rgba(0,0,0,0.06)]"
            >
              <Image
                src={`/sop-bad-refs/${file}`}
                alt={`Bad reference example ${i + 1} — do not package or label like this`}
                width={900}
                height={675}
                className="h-auto w-full object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <figcaption className="border-border bg-destructive-bg text-destructive border-t px-3 py-2 text-center text-sm font-semibold sm:text-base">
                Bad example {i + 1} — avoid this
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="border-border bg-card mt-6 rounded-2xl border p-5 shadow-[0_2px_16px_rgba(0,0,0,0.06)] sm:mt-8 sm:p-8 print:shadow-none">
        <h2 className="text-2xl font-bold sm:text-3xl">
          5) How to Pack the Package
        </h2>
        <ol className="mt-4 space-y-3 text-base sm:text-xl">
          {packingSteps.map((step, index) => (
            <li
              key={step}
              className="border-border bg-muted flex items-start gap-3 rounded-lg border p-3 sm:p-4"
            >
              <span className="bg-action text-action-foreground flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold sm:h-10 sm:w-10 sm:text-base">
                {index + 1}
              </span>
              <span className="text-foreground">{step}</span>
            </li>
          ))}
        </ol>

        <div className="border-action bg-muted mt-5 border-l-4 p-4 sm:p-5">
          <p className="text-subtle-foreground font-mono text-[10px] font-semibold uppercase tracking-[0.06em] sm:text-xs">
            Photo reminder
          </p>
          <p className="text-foreground mt-1 text-lg font-bold sm:text-2xl">
            Photo Reminder While Packing
          </p>
          <p className="text-muted-foreground mt-2 text-base sm:text-xl">
            Before handover, take a clear reference photo of the packed bag. The
            label details must be fully visible in the photo: date, factory name,
            team name, SD card count, and mobile number if you wrote one.
          </p>
        </div>
      </section>

      <section className="border-border bg-card mt-6 rounded-2xl border p-5 shadow-[0_2px_16px_rgba(0,0,0,0.06)] sm:mt-8 sm:p-8 print:shadow-none">
        <h2 className="text-2xl font-bold sm:text-3xl">
          6) Common Mistakes - Wrong vs Right
        </h2>
        <div className="border-border mt-4 overflow-hidden rounded-xl border">
          <div className="grid grid-cols-2">
            <div className="bg-destructive-bg text-destructive p-3 text-lg font-bold sm:text-2xl">
              ❌ Wrong
            </div>
            <div className="bg-success-bg text-success p-3 text-lg font-bold sm:text-2xl">
              ✅ Right
            </div>
          </div>
          {mistakes.map((item) => (
            <div key={item.wrong} className="border-border grid grid-cols-2 border-t">
              <div className="bg-destructive-bg text-foreground p-3 text-sm sm:p-4 sm:text-xl">
                {item.wrong}
              </div>
              <div className="bg-success-bg text-foreground p-3 text-sm sm:p-4 sm:text-xl">
                {item.right}
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-border bg-muted text-foreground mt-6 rounded-2xl border p-5 text-lg font-semibold sm:mt-8 sm:p-8 sm:text-2xl">
        If you are unsure, ask your supervisor before sealing. Do not return
        unlabeled or unsealed packages. Write every detail on the package so
        ingestion goes smoothly, your data stays yours, and we can reach you on
        your mobile if anything needs checking.
      </footer>
    </main>
  );
}
