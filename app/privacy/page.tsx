import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Privacy Policy | BrightAxis AI",
  description:
    "BrightAxis AI Privacy Policy explaining how we collect, use, share, and protect personal information for website visitors, clients, and candidates for employment opportunities.",
  alternates: {
    canonical: "/privacy",
  },
}

const lastUpdated = "August 11, 2026"

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="relative overflow-hidden pt-32 pb-16">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-medium text-primary">Legal</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl text-balance">
            Privacy Policy
          </h1>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            This Privacy Policy describes how BrightAxis AI (&quot;BrightAxis,&quot;
            &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) collects, uses,
            discloses, and protects personal information when you visit our
            websites, communicate with us, engage our services, or apply for or
            are considered for employment opportunities.
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Last updated: {lastUpdated}
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <nav
            aria-label="Privacy policy sections"
            className="mb-12 rounded-2xl border border-border bg-card p-6"
          >
            <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              On this page
            </h2>
            <ol className="mt-4 grid gap-2 text-sm sm:grid-cols-2">
              {[
                ["commitment", "Our commitment to privacy"],
                ["scope", "Scope of this policy"],
                ["collect", "Information we collect"],
                ["use", "How we use information"],
                ["recruitment", "Recruitment & employment candidates"],
                ["linkedin", "LinkedIn and outreach"],
                ["share", "How we share information"],
                ["security", "Data security"],
                ["retention", "Data retention"],
                ["rights", "Your privacy rights"],
                ["children", "Children’s data"],
                ["international", "International transfers"],
                ["cookies", "Cookies and tracking"],
                ["changes", "Changes to this policy"],
                ["contact", "How to contact us"],
              ].map(([id, label]) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className="text-primary hover:underline underline-offset-4"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <article className="prose-privacy space-y-12 text-base leading-relaxed text-foreground">
            <section id="commitment" className="scroll-mt-28">
              <h2 className="text-2xl font-bold tracking-tight">
                Our commitment to privacy
              </h2>
              <p className="mt-4 text-muted-foreground">
                BrightAxis is committed to protecting the privacy and security of
                personal information entrusted to us by website visitors, clients,
                prospects, employees, and candidates. This notice
                explains our online and offline information practices and the
                choices you can make about how your information is collected and
                used. We publish this Policy so it is easy to find from our
                homepage and wherever personal information may be requested.
              </p>
            </section>

            <section id="scope" className="scroll-mt-28">
              <h2 className="text-2xl font-bold tracking-tight">
                Scope of this policy
              </h2>
              <p className="mt-4 text-muted-foreground">
                This Policy applies to personal information collected or submitted
                through brightaxis.ai and related BrightAxis sites, applications,
                forms, email, phone, messaging platforms, and recruitment or
                staffing activities (together, the &quot;Sites&quot; and
                &quot;Services&quot;). It covers:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground">
                <li>Visitors to our website and users of our online forms</li>
                <li>
                  Clients and prospective clients who engage us for AI consulting,
                  engineering, and related professional services
                </li>
                <li>
                  Candidates and applicants considered for employment
                  opportunities with BrightAxis or our clients
                </li>
                <li>
                  Individuals we contact through professional networks such as
                  LinkedIn in connection with business development or staffing
                </li>
              </ul>
              <p className="mt-4 text-muted-foreground">
                Your use of the Sites is also subject to any applicable Terms of
                Service. If you do not agree with this Policy, please do not use
                the Sites or provide personal information to us.
              </p>
            </section>

            <section id="collect" className="scroll-mt-28">
              <h2 className="text-2xl font-bold tracking-tight">
                The information we collect
              </h2>
              <p className="mt-4 text-muted-foreground">
                &quot;Personal information&quot; means information that relates to
                an identifiable individual. We may collect information in the
                following categories:
              </p>

              <h3 className="mt-8 text-xl font-semibold">
                Information you provide directly
              </h3>
              <ul className="mt-3 list-disc space-y-2 pl-6 text-muted-foreground">
                <li>
                  Contact details such as name, email address, phone number,
                  company, job title, and mailing address
                </li>
                <li>
                  Messages you send through contact forms, email, chat, or
                  calendaring tools
                </li>
                <li>
                  Recruitment materials such as resumes/CVs, cover letters, work
                  history, education, skills, certifications, salary
                  expectations, work authorization, and preferred work location
                </li>
                <li>
                  Billing or commercial information needed to fulfill a contract
                  (for clients and vendors)
                </li>
              </ul>

              <h3 className="mt-8 text-xl font-semibold">
                Information collected automatically
              </h3>
              <p className="mt-3 text-muted-foreground">
                When you browse our website, we may record your IP address, browser
                type, device information, operating system, referring URLs, pages
                viewed, and similar usage data. This information helps us monitor
                and improve the Sites and is generally not used to identify you as
                an individual unless combined with other data.
              </p>

              <h3 className="mt-8 text-xl font-semibold">
                Information from third parties and public sources
              </h3>
              <ul className="mt-3 list-disc space-y-2 pl-6 text-muted-foreground">
                <li>
                  Professional or social media profiles you make public (including
                  LinkedIn)
                </li>
                <li>
                  Referrals from BrightAxis personnel, clients, or other candidates
                </li>
                <li>
                  Background-checking or screening providers (where permitted by
                  law), referees, and prior employers
                </li>
                <li>
                  Publicly available business directories and professional sources
                </li>
              </ul>
            </section>

            <section id="use" className="scroll-mt-28">
              <h2 className="text-2xl font-bold tracking-tight">
                How we use information
              </h2>
              <p className="mt-4 text-muted-foreground">
                We use personal information to operate our business and provide
                Services, including to:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground">
                <li>
                  Respond to inquiries, schedule calls, and provide requested
                  information or proposals
                </li>
                <li>
                  Deliver AI consulting, product engineering, staffing, and
                  related client services
                </li>
                <li>
                  Manage contractual relationships, billing, and compliance
                  obligations
                </li>
                <li>
                  Improve our website, offerings, and user experience
                </li>
                <li>
                  Send service-related notices and, where permitted, marketing or
                  market-research communications (you may opt out at any time)
                </li>
                <li>
                  Protect the security of our systems, prevent fraud, and enforce
                  our rights
                </li>
                <li>
                  Comply with applicable laws, regulations, and legal processes
                </li>
              </ul>
              <p className="mt-4 text-muted-foreground">
                We do not use personal information in ways unrelated to those
                described in this Policy without providing you an opportunity to
                opt out or otherwise prohibit such uses, except where required or
                authorized by law.
              </p>
            </section>

            <section id="recruitment" className="scroll-mt-28">
              <h2 className="text-2xl font-bold tracking-tight">
                Recruitment and employment candidates
              </h2>
              <p className="mt-4 text-muted-foreground">
                This section applies to prospects, applicants, and candidates in
                relation to employment or internship opportunities with BrightAxis
                or our clients. Clients with whom we work on placements may be
                provided this Policy as part of our staffing and compliance
                practices.
              </p>
              <p className="mt-4 text-muted-foreground">
                We may process candidate information to:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground">
                <li>
                  Assess suitability for open and future roles
                </li>
                <li>
                  Manage applications, interviews, and onboarding
                </li>
                <li>
                  Match candidates to client requirements and facilitate
                  introductions or placements
                </li>
                <li>
                  Send job alerts or opportunities consistent with stated
                  preferences (including by email or text where consented or
                  otherwise permitted)
                </li>
                <li>
                  Verify information through references and, where permitted,
                  background or security screening
                </li>
                <li>
                  Perform workforce analytics in aggregated or de-identified form
                  to improve recruiting
                </li>
                <li>
                  Meet legal, contractual, and audit requirements related to
                  staffing engagements
                </li>
              </ul>
              <p className="mt-4 text-muted-foreground">
                Where we submit your profile to a client for an employment
                opportunity, we share only the information reasonably necessary
                for that opportunity, consistent with this Policy and applicable
                law.
              </p>
            </section>

            <section id="linkedin" className="scroll-mt-28">
              <h2 className="text-2xl font-bold tracking-tight">
                LinkedIn and professional outreach
              </h2>
              <p className="mt-4 text-muted-foreground">
                BrightAxis may use LinkedIn and similar professional platforms,
                including authorized automation or outreach tools, to identify and
                contact professionals about career opportunities, client needs, or
                BrightAxis services. When we do so:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground">
                <li>
                  We rely on information you make publicly available on those
                  platforms and any information you choose to share with us
                </li>
                <li>
                  Outreach messages identify BrightAxis and the purpose of contact
                  (for example, a role match or business introduction)
                </li>
                <li>
                  You may ask us to stop contacting you at any time by replying to
                  the message or emailing{" "}
                  <a
                    href="mailto:talent@brightaxis.ai"
                    className="text-primary hover:underline"
                  >
                    talent@brightaxis.ai
                  </a>
                </li>
                <li>
                  We do not sell candidate personal information obtained through
                  LinkedIn outreach for third-party advertising
                </li>
              </ul>
              <p className="mt-4 text-muted-foreground">
                Platform providers such as LinkedIn process data under their own
                privacy policies. Please review those policies for how they handle
                your information.
              </p>
            </section>

            <section id="share" className="scroll-mt-28">
              <h2 className="text-2xl font-bold tracking-tight">
                Whom we share your personal information with
              </h2>
              <p className="mt-4 text-muted-foreground">
                We may disclose personal information to the following categories of
                recipients, as needed for the purposes described in this Policy:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground">
                <li>
                  BrightAxis personnel and affiliates involved in delivering
                  services or administering recruitment
                </li>
                <li>
                  Clients and prospective clients in connection with staffing,
                  project delivery, or business proposals, where relevant and
                  appropriate
                </li>
                <li>
                  Service providers that support our operations (for example,
                  hosting, email, CRM, analytics, background screening, and
                  payment processors), under contractual confidentiality and
                  security obligations
                </li>
                <li>
                  Professional advisers, auditors, and insurers
                </li>
                <li>
                  Courts, regulators, public authorities, or other parties when
                  required by law or to protect legal rights, safety, or security
                </li>
                <li>
                  Parties to a corporate transaction (such as a merger or asset
                  sale), subject to appropriate protections
                </li>
                <li>
                  Other third parties where you have consented or instructed us to
                  share your information
                </li>
              </ul>
              <p className="mt-4 text-muted-foreground">
                We do not sell personal information to third parties for monetary
                consideration, and we do not share personal information for
                cross-context behavioral advertising in the manner those terms are
                defined under the California Privacy Rights Act (CPRA), except as
                otherwise disclosed and where required consent is obtained.
              </p>
              <p className="mt-4 text-muted-foreground">
                Please note that no method of transmission over the Internet is
                completely secure. You are responsible for safeguarding any
                passwords or authentication credentials used to access secured
                areas of our Sites or recruitment portals.
              </p>
            </section>

            <section id="security" className="scroll-mt-28">
              <h2 className="text-2xl font-bold tracking-tight">
                Data security
              </h2>
              <p className="mt-4 text-muted-foreground">
                We maintain organizational, physical, and technical safeguards
                designed to protect personal information against unauthorized
                access, loss, misuse, or alteration. These measures are calibrated
                to the sensitivity of the data and the risks associated with our
                processing activities. No security program can be guaranteed to be
                100% secure; if you believe your interaction with us is no longer
                secure, please contact us immediately.
              </p>
            </section>

            <section id="retention" className="scroll-mt-28">
              <h2 className="text-2xl font-bold tracking-tight">
                How long we retain information
              </h2>
              <p className="mt-4 text-muted-foreground">
                We retain personal information only as long as reasonably necessary
                for the purposes described in this Policy, including to:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground">
                <li>
                  Maintain an active business or recruiting relationship with you
                </li>
                <li>
                  Provide Services and complete transactions
                </li>
                <li>
                  Comply with legal, tax, audit, and contractual obligations
                </li>
                <li>
                  Resolve disputes and enforce agreements
                </li>
              </ul>
              <p className="mt-4 text-muted-foreground">
                Candidate records may be retained for a reasonable period to
                consider you for future opportunities unless you request deletion
                earlier (subject to legal retention requirements).
              </p>
            </section>

            <section id="rights" className="scroll-mt-28">
              <h2 className="text-2xl font-bold tracking-tight">
                Your privacy rights
              </h2>
              <p className="mt-4 text-muted-foreground">
                Depending on your location and applicable law (including U.S.
                state privacy laws and, where applicable, GDPR), you may have the
                right to:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground">
                <li>
                  Request access to a summary or copy of personal information we
                  hold about you
                </li>
                <li>
                  Request correction of inaccurate or incomplete information
                </li>
                <li>
                  Request deletion of personal information, subject to exceptions
                  (for example, completing transactions or maintaining required
                  records)
                </li>
                <li>
                  Object to or request restriction of certain processing
                </li>
                <li>
                  Request portability of personal information you provided to us
                </li>
                <li>
                  Opt out of marketing communications
                </li>
                <li>
                  Withdraw consent where processing is based on consent
                </li>
              </ul>
              <p className="mt-4 text-muted-foreground">
                To exercise these rights, contact us using the details below. We
                may need to verify your identity before fulfilling a request. You
                also have the right to lodge a complaint with a supervisory
                authority where applicable.
              </p>
            </section>

            <section id="children" className="scroll-mt-28">
              <h2 className="text-2xl font-bold tracking-tight">
                Children&apos;s data
              </h2>
              <p className="mt-4 text-muted-foreground">
                Our Sites and Services are not directed to children and we do not
                knowingly collect personal information from children. If we learn
                that we have collected personal information from a child, we will
                delete it. If you believe a child has provided us with personal
                information, please contact us.
              </p>
            </section>

            <section id="international" className="scroll-mt-28">
              <h2 className="text-2xl font-bold tracking-tight">
                International transfers
              </h2>
              <p className="mt-4 text-muted-foreground">
                BrightAxis operates with offices and collaborators in multiple
                locations, including the United States, India, and Canada. Personal
                information may be transferred to, stored in, or accessed from
                countries other than the one in which it was collected. Where
                required, we use appropriate safeguards (such as contractual
                protections) consistent with applicable data protection laws.
              </p>
            </section>

            <section id="cookies" className="scroll-mt-28">
              <h2 className="text-2xl font-bold tracking-tight">
                Cookies and similar technologies
              </h2>
              <p className="mt-4 text-muted-foreground">
                We may use cookies and similar technologies to operate the Sites,
                understand usage, and improve performance. You can control cookies
                through your browser settings. Disabling certain cookies may
                affect Site functionality. Third-party services embedded on our
                Sites (for example, analytics providers) may set their own cookies
                subject to their privacy policies.
              </p>
            </section>

            <section id="changes" className="scroll-mt-28">
              <h2 className="text-2xl font-bold tracking-tight">
                Changes to this policy
              </h2>
              <p className="mt-4 text-muted-foreground">
                We may update this Privacy Policy from time to time. Revisions will
                be posted on this page with an updated &quot;Last updated&quot;
                date. Please review this page periodically. Continued use of the
                Sites after changes are posted constitutes acceptance of the
                revised Policy where permitted by law.
              </p>
            </section>

            <section id="contact" className="scroll-mt-28">
              <h2 className="text-2xl font-bold tracking-tight">
                How to contact us
              </h2>
              <p className="mt-4 text-muted-foreground">
                If you have questions or concerns about this Privacy Policy, wish
                to exercise your privacy rights, or want to opt out of recruitment
                or marketing outreach, please contact us:
              </p>
              <div className="mt-6 rounded-2xl border border-border bg-card p-6 space-y-2">
                <p className="font-semibold">BrightAxis AI</p>
                <p className="text-muted-foreground">
                  Headquarters: San Francisco, CA
                </p>
                <p className="text-muted-foreground">
                  Branch offices: Bangalore · Bhubaneswar · Canada
                </p>
                <p className="text-muted-foreground">
                  Email:{" "}
                  <a
                    href="mailto:talent@brightaxis.ai"
                    className="text-primary hover:underline"
                  >
                    talent@brightaxis.ai
                  </a>
                </p>
                <p className="text-muted-foreground">
                  Phone:{" "}
                  <a
                    href="tel:+16503051682"
                    className="text-primary hover:underline"
                  >
                    (650) 305-1682
                  </a>
                </p>
                <p className="text-muted-foreground">
                  Web:{" "}
                  <Link href="/contact" className="text-primary hover:underline">
                    brightaxis.ai/contact
                  </Link>
                </p>
              </div>
              <p className="mt-6 text-muted-foreground">
                By using BrightAxis Sites or Services, you acknowledge that you
                have read this Privacy Policy. We welcome comments and suggestions
                that help us respect your privacy and protect your personal
                information.
              </p>
            </section>
          </article>
        </div>
      </section>

      <Footer />
    </main>
  )
}
