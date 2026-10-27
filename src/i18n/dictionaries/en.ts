export const en = {
  meta: {
    title: "Orza — The household budget, without the arguments",
    description:
      "Orza turns fixed costs, shared spending and what is left at the end of the month into one clear view for everyone who pays.",
  },
  nav: {
    items: [
      { hash: "#product", label: "Monthly view" },
      { hash: "#shared", label: "Shared money" },
      { hash: "#pricing", label: "Pricing" },
      { hash: "#faq", label: "Questions" },
    ],
    cta: "Start free",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    language: "Language",
  },
  hero: {
    badge: "New — automatic split",
    titleLead: "The household budget,",
    titleAccent: "without the arguments.",
    lead: "One shared view of fixed costs, everyday spending and what is actually left. Everyone sees the same numbers, and nobody rebuilds the spreadsheet.",
    primaryCta: "Start for free",
    secondaryCta: "See how it works",
    note: "No card required. Add the fixed costs by hand, or import a statement.",
    imageAlt:
      "A paper ledger, a pen and two ceramic cups on a wooden table beside a window",
  },
  values: {
    eyebrow: "Why Orza",
    title: "Built for the money you share.",
    lead: "Most budget apps were designed for one person. A household has fixed costs, uneven incomes and a calendar that does not match anyone else's.",
    items: [
      {
        title: "Fixed costs come first",
        body: "Rent, utilities, subscriptions and debt leave the picture before anything else is allocated. What you see is what is actually free.",
      },
      {
        title: "A split you can defend",
        body: "Split by income, by usage or in equal parts. Orza applies the rule you chose and keeps the record of it.",
      },
      {
        title: "Alerts before the overspend",
        body: "A warning arrives while a category still has room, not after the month is gone.",
      },
      {
        title: "Closing takes two minutes",
        body: "At the end of the month, Orza reconciles what was planned with what was spent and carries the difference forward.",
      },
    ],
  },
  how: {
    eyebrow: "How it works",
    title: "Three steps, then it runs itself.",
    lead: "The setup is a one-time job. Every month after it starts from the same baseline.",
    steps: [
      {
        title: "Add what is fixed",
        body: "Rent, bills, subscriptions, loans. Orza turns them into the baseline every month starts from.",
      },
      {
        title: "Choose how you split",
        body: "By income, by usage or equal parts. Change the rule later without rewriting history.",
      },
      {
        title: "Check the number that matters",
        body: "One figure: what is left to spend until the next income arrives.",
      },
    ],
  },
  featureMonth: {
    eyebrow: "Monthly view",
    title: "One month, one screen, no spreadsheet.",
    lead: "The month view groups fixed costs, variable spending and savings in the order money actually leaves the account.",
    points: [
      "Fixed, variable and saved kept apart, so a good week is not mistaken for a good month.",
      "Category limits show the amount left, not only the percentage spent.",
      "Every entry keeps who paid and who owes what.",
    ],
    imageAlt:
      "An open notebook with neat columns of figures, a calculator and a mug on a linen tablecloth",
  },
  featureSplit: {
    eyebrow: "Shared money",
    title: "Everyone sees the same number.",
    lead: "Two incomes, one rent and a shared card. Orza keeps the split visible, so the conversation stays about plans instead of arithmetic.",
    points: [
      "Split by income share when salaries differ.",
      "Shared and personal expenses in separate ledgers, on the same screen.",
      "A closing summary you can export when you need to show it.",
    ],
    imageAlt:
      "Two ceramic bowls, a folded envelope and a small stack of coins on a pale wooden table",
  },
  pricing: {
    eyebrow: "Pricing",
    title: "One price per household, not per person.",
    lead: "Start free. Upgrade when the household grows.",
    period: "/ month",
    freeLabel: "Free",
    billed: "Billed monthly. VAT included.",
    plans: [
      {
        name: "Free",
        amountMinor: 0,
        summary: "For one person keeping track.",
        features: [
          "One household",
          "Fixed costs and category limits",
          "Monthly closing summary",
        ],
        cta: "Start free",
        featured: false,
      },
      {
        name: "Home",
        amountMinor: 600,
        summary: "For a household that shares the bills.",
        features: [
          "Unlimited members",
          "Income-based split",
          "Shared and personal ledgers",
          "Export at closing",
        ],
        cta: "Choose Home",
        featured: true,
      },
      {
        name: "Advisor",
        amountMinor: 1500,
        summary: "For people who manage more than one household.",
        features: [
          "Everything in Home",
          "Several households",
          "Year-over-year comparison",
          "Priority support",
        ],
        cta: "Talk to us",
        featured: false,
      },
    ],
    finePrint:
      "Prices in euros. Cancel at any time and export your data before you leave.",
  },
  faq: {
    eyebrow: "Questions",
    title: "What people ask before starting.",
    items: [
      {
        question: "Is Orza a bank?",
        answer:
          "No. Orza never holds money and never moves it. It reads the accounts you authorise and does the arithmetic on top.",
      },
      {
        question: "Do I need to connect a bank account?",
        answer:
          "No. You can enter fixed costs by hand or import a statement. A connected account saves time, it is not a requirement.",
      },
      {
        question: "How does the income-based split work?",
        answer:
          "Shared costs are divided in proportion to each member's income for that month. The rule is stored with the month, so a change later does not rewrite the past.",
      },
      {
        question: "What happens at the end of the month?",
        answer:
          "Orza compares what was planned with what was spent, shows the difference per category and carries the balance into the next month.",
      },
      {
        question: "Can I use it on my own?",
        answer:
          "Yes. A one-person household gets the same view, without the split rules.",
      },
      {
        question: "What happens to my data?",
        answer:
          "It is used to compute your budget and nothing else. You can export it at any time.",
      },
    ],
  },
  cta: {
    title: "Know what is left before the month asks.",
    lead: "Set the fixed costs once. The next month starts already organised.",
    button: "Start for free",
    note: "This is a demonstration site. No accounts, no payments, no data collected.",
  },
  footer: {
    tagline: "A shared budget for people who split the bills.",
    columns: [
      {
        title: "Product",
        links: [
          { hash: "#product", label: "Monthly view" },
          { hash: "#shared", label: "Shared money" },
          { hash: "#pricing", label: "Pricing" },
          { hash: "#faq", label: "Questions" },
        ],
      },
    ],
    rights: "All rights reserved.",
  },
  notFound: {
    title: "This page is not here.",
    body: "The link may be old, or the page may have moved.",
    action: "Back to the start",
  },
};

export type Dictionary = typeof en;
