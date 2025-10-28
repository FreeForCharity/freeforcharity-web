import React from "react";

const Index = () => {
  const sections = [
    {
      id: "section1",
      label: "FFC Hub by WHMCS (Domain Orders, Client Data, Support Tickets)",
    },
    { id: "section2", label: "Cloudflare (DNS Management & Email Connection)" },
    { id: "section3", label: "Microsoft 365 (Email Hosting)" },
    { id: "section4", label: "InterServer Web Hosting (with DirectAdmin)" },
    { id: "section5", label: "DIVI (WordPress Theme)" },
    { id: "section6", label: "WPMUdev (WordPress Plugins)" },
    { id: "section7", label: "Microsoft Clarity (Analytics)" },
    { id: "section8", label: "Tawk.to Live Chat (Support)" },
    { id: "section9", label: "Azure AI Language (Custom Question Answering)" },
    { id: "section10", label: "Final Notes" },
  ];

  return (
    <div className="px-2 md:px-5 w-full pt-[160px] pb-[80px]">
      <div className="w-full max-w-[1000px] mx-auto rounded-[12px] shadow-[0_8px_32px_rgba(0,30,80,0.08)] pt-[58px] p-[1.5rem] md:p-[3rem] border border-[#e1e5eb] bg-[#ffffff]">
        <h1 className="text-[2rem] md:text-[2.75rem] text-center border-b-2 border-[#e1e5eb] pb-6 mb-8 text-[#005A9C] font-[700] leading-[57px]">
          Free For Charity (FFC) Web Developer Training Guide
        </h1>

        <p className="pb-[1em] text-[14px] font-[500] leading-[25px] text-[#333d47]">
          This guide is designed to help you support a new charity by setting up
          and managing the suite of online tools that FFC uses. Follow the
          detailed instructions and use the provided resource links to become
          proficient with each platform.
        </p>

        <div className="bg-[#fdfdff] p-6 px-3 md:px-8 rounded-lg border border-[#e1e5eb] border-l-[5px] border-l-[#0078D4] mb-12">
          <h2 className="mt-0 border-b-0 text-[24px] font-[700] text-[#005AA0] mb-[1.5rem]">
            Table of Contents
          </h2>

          <ol className="list-decimal list-inside pl-0">
            {sections.map((item) => (
              <li
                key={item.id}
                className="w-full py-3 px-4 rounded-md font-semibold text-[14px] text-[#0078D4] transition-colors duration-200 hover:bg-[#eef6ff] hover:text-[#005AA0]"
              >
                <a href={`#${item.id}`} className="py-3 px-4">
                  {item.label}
                </a>
              </li>
            ))}
          </ol>
        </div>

        {/* 1. FFC Hub by WHMCS */}
        <section id="section1" className="mb-6">
          <ol className="list-decimal list-inside">
            <li className="text-[2rem] md:text-[2.25rem]  font-[700] text-[#005AA0] mt-16 mb-6 pb-3 border-b border-[#e1e5eb]">
              FFC Hub by WHMCS
            </li>
          </ol>

          <p className="text-[14px] font-[500] leading-[25px] text-[#333d47]">
            WHMCS powers the FFC Hub, which handles domain name orders, client
            data, billing and support tickets. Below are practical steps and
            troubleshooting notes for everyday tasks.
          </p>

          <h3 className="text-[24px] leading-[31px] font-[700] text-[#0078D4] mt-10 mb-4">
            1.1. Login URLs
          </h3>

          <ul className="pl-[1.5rem] p-[0_0_23px_1em] list-disc">
            <li className="pl-[0.5rem] mb-[0.75rem] text-[14px] font-[500] text-[#333d47]">
              <span className="font-[600] text-[#1c2a38]">
                Charity Login URL:
              </span>{" "}
              <a
                href="https://freeforcharity.org/hub"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#005a9c]"
              >
                https://freeforcharity.org/hub
              </a>
            </li>
            <li className="pl-[0.5rem] mb-[0.75rem] text-[14px] font-[500] text-[#333d47]">
              <span className="font-[600] text-[#1c2a38]">
                Admin Login URL:
              </span>{" "}
              <a
                href="https://freeforcharity.org/hub/globaladmin"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#005a9c]"
              >
                https://freeforcharity.org/hub/globaladmin
              </a>
            </li>
          </ul>

          <h3 className="text-[24px] leading-[31px] font-[700] text-[#0078D4] mt-[3rem] mb-4">
            1.2. Main Setup Steps
          </h3>

          <ul className="pl-[1.5rem] p-[0_0_23px_1em] list-disc">
            <li className="leading-[26px] pl-[0.5rem] mb-[0.75rem] text-[14px] font-[500] text-[#333d47]">
              <span className="font-[600] text-[#1c2a38]">
                Primary Contact Information:
              </span>{" "}
              Ensure the account’s primary email is not based on the charity’s
              domain (e.g. use{" "}
              <code className="bg-[#f1f3f5] text-[#d6336c] py-[0.3em] px-[0.5em] rounded-[6px] text-[0.9em]">
                charityname@outlook.com
              </code>{" "}
              instead of an address like{" "}
              <code className="bg-[#f1f3f5] text-[#d6336c] py-[0.3em] px-[0.5em] rounded-[6px] text-[0.9em]">
                info@charityname.org
              </code>
              .
            </li>

            <li className="leading-[26px] pl-[0.5rem] mb-[0.75rem] text-[14px] font-[500] text-[#333d47]">
              <span className="font-[600] text-[#1c2a38]">
                Multiple Contacts:
              </span>{" "}
              Add at least two administrators to the account to avoid lockouts.
            </li>

            <li className="leading-[26px] pl-[0.5rem] mb-[0.75rem] text-[14px] font-[500] text-[#333d47]">
              <span className="font-[600] text-[#1c2a38]">
                Domain Purchase & Configuration:
              </span>{" "}
              Guide the charity through purchasing a{" "}
              <code className="bg-[#f1f3f5] text-[#d6336c] py-[0.3em] px-[0.5em] rounded-[6px] text-[0.9em]">
                .org
              </code>{" "}
              domain via WHMCS and confirm coupon codes from onboarding emails.
            </li>
          </ul>

          <h3 className="text-[24px] leading-[31px] font-[700] text-[#0078D4] mt-[3rem] mb-4">
            1.3. Common Issues & Solutions
          </h3>

          <ul className="pl-[1.5rem] p-[0_0_23px_1em] list-disc">
            <li className="leading-[26px] pl-[0.5rem] mb-[0.75rem] text-[14px] font-[500] text-[#333d47]">
              <span className="font-[600] text-[#1c2a38]">
                Incomplete Onboarding Form:
              </span>{" "}
              <ul className="list-disc pl-[20px] pb-[20px] mt-[0.75rem]">
                <li className="leading-[26px] pl-[0.5rem] mb-[0.75rem] text-[14px] font-[500] text-[#333d47]">
                  <span className="italic text-[#1c2a38]">Issue:</span> Charity
                  hasnt completed the onboarding form.
                </li>
                <li className="leading-[26px] pl-[0.5rem] mb-[0.75rem] text-[14px] font-[500] text-[#333d47]">
                  <span className="italic text-[#1c2a38]">Solution:</span>{" "}
                  Schedule a Teams screen-share or escalate to a Global Admin.
                </li>
              </ul>
            </li>

            <li className="leading-[26px] pl-[0.5rem] mb-[0.75rem] text-[14px] font-[500] text-[#333d47]">
              <span className="font-[600] text-[#1c2a38]">
                Charity Order Flagged as Fraud:
              </span>{" "}
              <ul className="list-disc pl-[20px] pb-[20px] mt-[0.75rem]">
                <li className="leading-[26px] pl-[0.5rem] mb-[0.75rem] text-[14px] font-[500] text-[#333d47]">
                  <span className="italic text-[#1c2a38]">Issue:</span> Order
                  flagged by fraud checks.
                </li>
                <li className="leading-[26px] pl-[0.5rem] mb-[0.75rem] text-[14px] font-[500] text-[#333d47]">
                  <span className="italic text-[#1c2a38]">Solution:</span>{" "}
                  Confirm order origin (US), billing address match, and escalate
                  when necessary.
                </li>
              </ul>
            </li>

            <li className="leading-[26px] pl-[0.5rem] mb-[0.75rem] text-[14px] font-[500] text-[#333d47]">
              <span className="font-[600] text-[#1c2a38]">
                Domain Transfer Failures:
              </span>{" "}
              <ul className="list-disc pl-[20px] pb-[20px] mt-[0.75rem]">
                <li className="leading-[26px] pl-[0.5rem] mb-[0.75rem] text-[14px] font-[500] text-[#333d47]">
                  <span className="italic text-[#1c2a38]">Issue:</span>{" "}
                  Incorrect EPP code or privacy enabled.
                </li>
                <li className="leading-[26px] pl-[0.5rem] mb-[0.75rem] text-[14px] font-[500] text-[#333d47]">
                  <span className="italic text-[#1c2a38]">Solution:</span>{" "}
                  Disable privacy, verify EPP, and resubmit transfer.
                </li>
              </ul>
            </li>
          </ul>

          <h3 className="text-[24px] leading-[31px] font-[700] text-[#0078D4] mt-[3rem] mb-6">
            1.4. Learning Resources
          </h3>

          <h4 className="text-[#1c2a38] text-[18px] pb-[10px] font-[700] leading-[23px]">
            Official WHMCS Learning Resources:
          </h4>
          <ul className="p-[0_0_23px_1.5rem] list-disc">
            <li className="hover:underline pl-[0.5rem] mb-[0.75rem] text-[14px] text-[#0078D4] leading-[26px] ">
              <a href="https://docs.whmcs.com/" target="_blank">
                WHMCS Documentation
              </a>
            </li>
            <li className="hover:underline  pl-[0.5rem] mb-[0.75rem] text-[14px] text-[#0078D4] leading-[26px] ">
              <a href="https://whmcs.community/knowledgebase" target="_blank">
                WHMCS Knowledgebase
              </a>
            </li>
            <li className="hover:underline  pl-[0.5rem] mb-[0.75rem] text-[14px] text-[#0078D4] leading-[26px] ">
              <a href="https://www.youtube.com/user/whmcs" target="_blank">
                WHMCS YouTube Channel
              </a>
            </li>
            <li className="hover:underline  pl-[0.5rem] mb-[0.75rem] text-[14px] text-[#0078D4] leading-[26px] ">
              <a href="https://blog.whmcs.com/" target="_blank">
                WHMCS Official Blog
              </a>
            </li>
            <li className="hover:underline  pl-[0.5rem] mb-[0.75rem] text-[14px] text-[#0078D4] leading-[26px] ">
              <a href="https://whmcs.community/" target="_blank">
                WHMCS Community Forum
              </a>
            </li>
          </ul>

          <h4 className="text-[#1c2a38] text-[18px] pb-[10px] font-[700] leading-[23px]">
            External WMHCS Learning Resources:
          </h4>
          <ul className="p-[0_0_23px_1.5rem] list-disc">
            <li className="hover:underline pl-[0.5rem] mb-[0.75rem] text-[14px] text-[#0078D4] leading-[26px] ">
              <a href="https://docs.whmcs.com/" target="_blank">
                WHMCS Setup Tutorials (Hostinger)
              </a>
            </li>
            <li className="pl-[0.5rem] mb-[0.75rem] text-[14px] leading-[26px] ">
              WHMCS Basics on YouTube:{" "}
              <a
                href="https://whmcs.community/knowledgebase"
                className="text-[#0078D4]  hover:underline  "
                target="_blank"
              >
                (Search for “WHMCS Tutorial” on YouTube)
              </a>
            </li>
            <li className="hover:underline  pl-[0.5rem] mb-[0.75rem] text-[14px] text-[#0078D4] leading-[26px] ">
              <a href="https://www.youtube.com/user/whmcs" target="_blank">
                Blog Post on WHMCS Best Practices
              </a>
            </li>
            <li className="hover:underline  pl-[0.5rem] mb-[0.75rem] text-[14px] text-[#0078D4] leading-[26px] ">
              <a href="https://blog.whmcs.com/" target="_blank">
                WHMCS Setup Guide by InMotion Hosting
              </a>
            </li>
            <li className="hover:underline  pl-[0.5rem] mb-[0.75rem] text-[14px] text-[#0078D4] leading-[26px] ">
              <a href="https://whmcs.community/" target="_blank">
                Community Comparisons & Reviews
              </a>
            </li>
          </ul>
        </section>

        {/* 2. Cloudflare */}
        <section id="section2" className="mb-6">
          <ol className="list-decimal list-inside" start={2}>
            <li className="text-[2rem] md:text-[2.25rem]  font-[700] text-[#005AA0] mt-16 mb-6 pb-3 border-b border-[#e1e5eb]">
              Cloudflare (DNS Management & Email Connection)
            </li>
          </ol>

          <p className="text-[14px] font-[500] leading-[25px] text-[#333d47]">
            Cloudflare manages the DNS settings for charity domains and is
            critical for setting up security (including DMARC) and email
            connectivity.
          </p>

          <h3 className="text-[24px] leading-[31px] font-[700] text-[#0078D4] mt-10 mb-4">
            2.1. Login URLs
          </h3>

          <ul className="pl-[1.5rem] p-[0_0_23px_1em] list-disc">
            <li className="pl-[0.5rem] mb-[0.75rem] text-[14px] font-[500] text-[#333d47]">
              <span className="font-[600] text-[#1c2a38]">
                Charity & Admin Login URL:
              </span>{" "}
              <a href="#" className="text-[#0078D4]">
                https://dash.cloudflare.com/
              </a>
            </li>
          </ul>

          <h3 className="text-[24px] leading-[31px] font-[700] text-[#0078D4] mt-[3rem] mb-4">
            2.2. Setup Steps
          </h3>

          <ul className="pl-[1.5rem] pb-[23px] list-disc space-y-[0.75rem]">
            {/* Step 1 */}
            <li className="pl-[0.5rem] text-[14px] font-[500] text-[#333d47] leading-[26px]">
              <span className="font-[600] text-[#1c2a38]">
                Change Name Servers in FFC Hub:{" "}
              </span>
              Update the charity’s DNS records in the FFC Hub to use the FFC
              Cloudflare nameservers.
              <ul className="list-disc list-inside mt-[0.5rem] space-y-[0.5rem]">
                <li className="text-[14px] font-[500] text-[#333d47] leading-[26px]">
                  <code className="bg-[#f1f3f5] text-[#d6336c] py-[0.3em] px-[0.5em] rounded-[6px] text-[0.9em]">
                    ns1.freeforcharity.org
                  </code>
                </li>
                <li className="text-[14px] font-[500] text-[#333d47] leading-[26px]">
                  <code className="bg-[#f1f3f5] text-[#d6336c] py-[0.3em] px-[0.5em] rounded-[6px] text-[0.9em]">
                    ns2.freeforcharity.org
                  </code>
                </li>
              </ul>
            </li>

            {/* Step 2 */}
            <li className="pl-[0.5rem] text-[14px] font-[500] text-[#333d47] leading-[26px]">
              <span className="font-[600] text-[#1c2a38]">
                Create a Cloudflare Account:{" "}
              </span>
              Assist the charity in setting up a Cloudflare account using their
              organizational email, e.g.,
              <code className="bg-[#f1f3f5] text-[#d6336c] py-[0.3em] px-[0.5em] rounded-[6px] text-[0.9em] ml-1">
                charityname@outlook.com
              </code>
            </li>

            {/* Step 3 */}
            <li className="pl-[0.5rem] text-[14px] font-[500] text-[#333d47] leading-[26px]">
              <span className="font-[600] text-[#1c2a38]">
                Grant Domain Permissions:{" "}
              </span>
              In the Cloudflare dashboard, add the charity’s domain and assign
              the “Domain Admin” role to the organizational account.
            </li>

            {/* Step 4 */}
            <li className="pl-[0.5rem] text-[14px] font-[500] text-[#333d47] leading-[26px]">
              <span className="font-[600] text-[#1c2a38]">
                Set up Cloudflare DMARC Management:{" "}
              </span>
              Follow Cloudflare’s instructions to configure DMARC records for
              improved email security.
            </li>

            {/* Step 5 */}
            <li className="pl-[0.5rem] text-[14px] font-[500] text-[#333d47] leading-[26px]">
              <span className="font-[600] text-[#1c2a38]">
                Establish Email Connection to Microsoft 365:{" "}
              </span>
              Configure the DNS records (MX, SPF, and DKIM) so that emails route
              correctly to Microsoft 365:
              <ol className="list-decimal list-inside mt-[0.75rem] space-y-[0.4rem] pl-[1.5rem]">
                <li>
                  Log in to your FFC Cloudflare admin account and navigate to
                  the charity’s domain.
                </li>
                <li>Click on the DNS section in Cloudflare.</li>
                <li>
                  Note the required DNS records provided by Microsoft 365 (these
                  include MX records, SPF configuration, and DKIM keys).
                </li>
                <li>
                  Open the{" "}
                  <a
                    href="#"
                    className="text-[#0078D4] hover:text-[#005AA0] hover:underline transition-colors duration-200"
                  >
                    Microsoft 365 Admin Portal
                  </a>
                  .
                </li>
                <li>Navigate to Setup → Domains and select “Add domain.”</li>
                <li>
                  Enter the charity’s domain name. Microsoft 365 will detect
                  missing DNS records.
                </li>
                <li>
                  When prompted, choose the option to use your Cloudflare
                  account credentials. Enter your Cloudflare username and
                  password so Microsoft 365 can automatically add the necessary
                  DNS records.
                </li>
                <li>
                  Once the records are added, verify the domain within the
                  Microsoft 365 portal.
                </li>
              </ol>
            </li>
          </ul>

          {/* ================  */}

          <h3 className="text-[24px] leading-[31px] font-[700] text-[#0078D4] mt-[3rem] mb-6">
            2.3. Learning Resources
          </h3>
          <h4 className="text-[#1c2a38] text-[18px] pb-[10px] font-[700] leading-[23px]">
            Official Cloudflare Learning Resources:
          </h4>

          <ul className="p-[0_0_23px_1.5rem] list-disc">
            <li className="hover:underline pl-[0.5rem] mb-[0.75rem] text-[14px] text-[#0078D4] leading-[26px] ">
              <a href="https://docs.whmcs.com/" target="_blank">
                WHMCS Documentation
              </a>
            </li>
            <li className="hover:underline  pl-[0.5rem] mb-[0.75rem] text-[14px] text-[#0078D4] leading-[26px] ">
              <a href="https://whmcs.community/knowledgebase" target="_blank">
                WHMCS Knowledgebase
              </a>
            </li>
            <li className="hover:underline  pl-[0.5rem] mb-[0.75rem] text-[14px] text-[#0078D4] leading-[26px] ">
              <a href="https://www.youtube.com/user/whmcs" target="_blank">
                WHMCS YouTube Channel
              </a>
            </li>
            <li className="hover:underline  pl-[0.5rem] mb-[0.75rem] text-[14px] text-[#0078D4] leading-[26px] ">
              <a href="https://blog.whmcs.com/" target="_blank">
                WHMCS Official Blog
              </a>
            </li>
            <li className="hover:underline  pl-[0.5rem] mb-[0.75rem] text-[14px] text-[#0078D4] leading-[26px] ">
              <a href="https://whmcs.community/" target="_blank">
                WHMCS Community Forum
              </a>
            </li>
          </ul>

          <h4 className="text-[#1c2a38] text-[18px] pb-[10px] font-[700] leading-[23px] mt-[1rem]">
            External Cloudflare Learning Resources:
          </h4>
          <ul className="p-[0_0_23px_1.5rem] list-disc">
            <li className="hover:underline pl-[0.5rem] mb-[0.75rem] text-[14px] text-[#0078D4] leading-[26px] ">
              <a href="https://docs.whmcs.com/" target="_blank">
                WHMCS Setup Tutorials (Hostinger)
              </a>
            </li>
            <li className="pl-[0.5rem] mb-[0.75rem] text-[14px] leading-[26px] ">
              WHMCS Basics on YouTube:{" "}
              <a
                href="https://whmcs.community/knowledgebase"
                className="text-[#0078D4]  hover:underline  "
                target="_blank"
              >
                (Search for “WHMCS Tutorial” on YouTube)
              </a>
            </li>
            <li className="hover:underline  pl-[0.5rem] mb-[0.75rem] text-[14px] text-[#0078D4] leading-[26px] ">
              <a href="https://www.youtube.com/user/whmcs" target="_blank">
                Blog Post on WHMCS Best Practices
              </a>
            </li>
            <li className="hover:underline  pl-[0.5rem] mb-[0.75rem] text-[14px] text-[#0078D4] leading-[26px] ">
              <a href="https://blog.whmcs.com/" target="_blank">
                WHMCS Setup Guide by InMotion Hosting
              </a>
            </li>
            <li className="hover:underline  pl-[0.5rem] mb-[0.75rem] text-[14px] text-[#0078D4] leading-[26px] ">
              <a href="https://whmcs.community/" target="_blank">
                Community Comparisons & Reviews
              </a>
            </li>
          </ul>
        </section>

        {/* 3. Microsoft 365 */}
        <section id="section3" className="mb-6">
          <ol className="list-decimal list-inside" start={3}>
            <li className="text-[2rem] md:text-[2.25rem]  font-[700] text-[#005AA0] mt-16 mb-6 pb-3 border-b border-[#e1e5eb]">
              Microsoft 365 (Email Hosting)
            </li>
          </ol>

          <p className="text-[14px] font-[500] leading-[25px] text-[#333d47]">
            Microsoft 365 provides the email hosting solution for charity
            accounts, ensuring seamless communication and collaboration.
          </p>

          <h3 className="text-[24px] leading-[31px] font-[700] text-[#0078D4] mt-10 mb-4">
            3.1. Setup Process
          </h3>

          <ul className="pl-[1.5rem] p-[0_0_23px_1em] list-disc">
            <li className="leading-[26px] pl-[0.5rem] mb-[0.75rem] text-[14px] font-[500] text-[#333d47]">
              <span className="font-[600] text-[#1c2a38]">
                Apply for NonProfit Email Hosting:
              </span>{" "}
              Visit the{" "}
              <a href="#" className="text-[#0078D4]">
                Microsoft Nonprofits page
              </a>{" "}
              to learn about eligibility and application steps.
            </li>

            <li className="leading-[26px] pl-[0.5rem] mb-[0.75rem] text-[14px] font-[500] text-[#333d47]">
              <span className="font-[600] text-[#1c2a38]">
                Configure Email Hosting:
              </span>{" "}
              Once approved, follow the steps in the Microsoft 365 Admin Portal
              to set up and configure email accounts for your charity. Detailed
              instructions can be found here:{" "}
              <a href="$" className="text-[#0078D4]">
                Microsoft 365 Admin Documentation.
              </a>
            </li>
          </ul>

          <h3 className="text-[24px] leading-[31px] font-[700] text-[#0078D4] mt-[3rem] mb-4">
            3.2. Learning Resources
          </h3>

          <h4 className="text-[#1c2a38] text-[18px] pb-[10px] font-[700] leading-[23px] mt-[1rem]">
            Official Microsoft 365 Learning Resources:
          </h4>
          <ul className="p-[0_0_23px_1.5rem] list-disc">
            <li className="hover:underline  pl-[0.5rem] mb-[0.75rem] text-[14px] text-[#0078D4] leading-[26px] ">
              <a href="https://www.youtube.com/user/whmcs" target="_blank">
                Microsoft Nonprofit Resource Center
              </a>
            </li>
            <li className="hover:underline  pl-[0.5rem] mb-[0.75rem] text-[14px] text-[#0078D4] leading-[26px] ">
              <a href="https://blog.whmcs.com/" target="_blank">
                Microsoft 365 Training Portal
              </a>
            </li>
            <li className="hover:underline  pl-[0.5rem] mb-[0.75rem] text-[14px] text-[#0078D4] leading-[26px] ">
              <a href="https://whmcs.community/" target="_blank">
                Microsoft 365 Admin Help
              </a>
            </li>
          </ul>

          <h4 className="text-[#1c2a38] text-[18px] pb-[10px] font-[700] leading-[23px] mt-[1rem]">
            External Microsoft 365 Learning Resources:
          </h4>

          <ul className="p-[0_0_23px_1.5rem] list-disc">
            <li className="hover:underline  pl-[0.5rem] mb-[0.75rem] text-[14px] leading-[26px] ">
              Microsoft 365 Setup Video Tutorials:
              <a
                href="https://www.youtube.com/user/whmcs"
                target="_blank"
                className="text-[#0078D4]"
              >
                (Search for “Microsoft 365 for nonprofits tutorial” on YouTube.)
              </a>
            </li>
            <li className="hover:underline  pl-[0.5rem] mb-[0.75rem] text-[14px] text-[#0078D4] leading-[26px] ">
              <a href="https://blog.whmcs.com/" target="_blank">
                Blog Guide by AvePoint
              </a>
            </li>
            <li className="hover:underline  pl-[0.5rem] mb-[0.75rem] text-[14px] text-[#0078D4] leading-[26px] ">
              <a href="https://whmcs.community/" target="_blank">
                Step-by-Step Guide on Setup
              </a>
            </li>
            <li className="hover:underline  pl-[0.5rem] mb-[0.75rem] text-[14px] text-[#0078D4] leading-[26px] ">
              <a href="https://whmcs.community/" target="_blank">
                Third-Party Tutorial on Adding Domains to M365
              </a>
            </li>
            <li className="hover:underline  pl-[0.5rem] mb-[0.75rem] text-[14px] text-[#0078D4] leading-[26px] ">
              <a href="https://whmcs.community/" target="_blank">
                Community Forum Discussions
              </a>
            </li>
          </ul>
        </section>

        {/* 4. InterServer */}
        <section id="section4" className="mb-6">
          <ol className="list-decimal list-inside" start={4}>
            <li className="text-[2rem] md:text-[2.25rem]  font-[700] text-[#005AA0] mt-16 mb-6 pb-3 border-b border-[#e1e5eb]">
              InterServer Web Hosting (with DirectAdmin)
            </li>
          </ol>

          <p className="text-[14px] font-[500] leading-[25px] text-[#333d47]">
            InterServer provides the hosting platform for charity websites.
          </p>

          <h3 className="text-[24px] leading-[31px] font-[700] text-[#0078D4] mt-10 mb-4">
            4.1. Setup Process
          </h3>

          <ul className="pl-[1.5rem] p-[0_0_23px_1em] list-disc">
            <li className="leading-[26px] pl-[0.5rem] mb-[0.75rem] text-[14px] font-[500] text-[#333d47]">
              <span className="font-[600] text-[#1c2a38]">
                Apply for a Hosting Account:
              </span>{" "}
              Directly request hosting services for the charity via InterServer:
              <a href="#" className="text-[#0078D4]">
                InterServer Support.
              </a>
            </li>
            <li className="leading-[26px] pl-[0.5rem] mb-[0.75rem] text-[14px] font-[500] text-[#333d47]">
              <span className="font-[600] text-[#1c2a38]">
                Configure the Hosting Environment:
              </span>{" "}
              Use the DirectAdmin panel to set up the website. Detailed guidance
              and documentation can be found on the DirectAdmin Help site:{" "}
              <a href="#" className="text-[#0078D4]">
                DirectAdmin Help Site.
              </a>
            </li>
          </ul>

          <h3 className="text-[24px] leading-[31px] font-[700] text-[#0078D4] mt-[3rem] mb-6">
            4.2. Learning Resources
          </h3>
          <h4 className="text-[#1c2a38] text-[18px] pb-[10px] font-[700] leading-[23px] mt-[1rem]">
            Official InterServer Resources:
          </h4>

          <ul className="pl-[1.5rem] p-[0_0_23px_1em] list-disc">
            <li className="leading-[26px] pl-[0.5rem] mb-[0.75rem] text-[14px] font-[500] text-[#333d47]">
              <a href="#" className="text-[#0078D4]">
                InterServer Knowledge Base
              </a>
            </li>
            <li className="leading-[26px] pl-[0.5rem] mb-[0.75rem] text-[14px] font-[500] text-[#333d47]">
              <a href="#" className="text-[#0078D4]">
                DirectAdmin Documentation
              </a>
            </li>
          </ul>
          <h4 className="text-[#1c2a38] text-[18px] pb-[10px] font-[700] leading-[23px] mt-[1rem]">
            External InterServer / DirectAdmin Learning Resources:
          </h4>

          <ul className="pl-[1.5rem] p-[0_0_23px_1em] list-disc">
            <li className="leading-[26px] pl-[0.5rem] mb-[0.75rem] text-[14px] font-[500] text-[#333d47]">
              <a href="#" className="text-[#0078D4]">
                Guide on Setting Up DirectAdmin
              </a>
            </li>
            <li className="leading-[26px] pl-[0.5rem] mb-[0.75rem] text-[14px] font-[500] text-[#333d47]">
              YouTube Tutorials on DirectAdmin:
              <a href="#" className="text-[#0078D4]">
                {" "}
                (Search for “DirectAdmin Setup Tutorial” on YouTube.)
              </a>
            </li>
            <li className="leading-[26px] pl-[0.5rem] mb-[0.75rem] text-[14px] font-[500] text-[#333d47]">
              <a href="#" className="text-[#0078D4]">
                Blog Posts & Forums
              </a>
            </li>
            <li className="leading-[26px] pl-[0.5rem] mb-[0.75rem] text-[14px] font-[500] text-[#333d47]">
              <a href="#" className="text-[#0078D4]">
                Community Resources on Hosting Setup
              </a>
            </li>
            <li className="leading-[26px] pl-[0.5rem] mb-[0.75rem] text-[14px] font-[500] text-[#333d47]">
              Step-by-Step InterServer Setup Guide: (Look for updated guides on
              InterServer’s blog.)
            </li>
          </ul>
        </section>

        {/* 5. DIVI */}
        <section id="section5" className="mb-6">
          <ol className="list-decimal list-inside" start={5}>
            <li className="text-[2rem] md:text-[2.25rem]  font-[700] text-[#005AA0] mt-16 mb-6 pb-3 border-b border-[#e1e5eb]">
              DIVI (WordPress Theme)
            </li>
          </ol>

          <p className="text-[14px] font-[500] leading-[25px] text-[#333d47]">
            DIVI is used to create visually appealing, responsive, and highly
            functional websites for charities.
          </p>

          {/* --- Installation & Customization --- */}
          <h3 className="text-[24px] leading-[31px] font-[700] text-[#0078D4] mt-10 mb-4">
            5.1. Installation & Customization Steps
          </h3>

          <ul className="pl-[1.5rem] pb-[23px] list-disc space-y-[0.75rem]">
            <li className="leading-[26px] pl-[0.5rem] text-[14px] font-[500] text-[#333d47]">
              <span className="font-[600] text-[#1c2a38]">Install Divi: </span>
              Download the Divi theme (typically provided through internal
              channels such as the FFC Internal Web Developer Microsoft Teams
              team) and follow the WordPress theme installation process.
            </li>
            <li className="leading-[26px] pl-[0.5rem] text-[14px] font-[500] text-[#333d47]">
              <span className="font-[600] text-[#1c2a38]">
                Customize Divi:{" "}
              </span>
              Use the built-in visual builder to customize page layouts, modify
              modules, and apply global design settings.
            </li>
          </ul>

          {/* --- Learning Resources --- */}
          <h3 className="text-[24px] leading-[31px] font-[700] text-[#0078D4] mt-[3rem] mb-6">
            5.2. Learning Resources
          </h3>

          {/* Official DIVI Resources */}
          <h4 className="text-[#1c2a38] text-[18px] pb-[10px] font-[700] leading-[23px] mt-[1rem]">
            Official DIVI Resources:
          </h4>

          <ul className="pl-[1.5rem] pb-[23px] list-disc space-y-[0.75rem]">
            <li className="leading-[26px] pl-[0.5rem] text-[14px] font-[500] text-[#333d47]">
              <a
                href="#"
                className="text-[#0078D4] hover:text-[#005AA0] hover:underline transition-colors duration-200"
              >
                Divi Documentation by Elegant Themes
              </a>
            </li>
            <li className="leading-[26px] pl-[0.5rem] text-[14px] font-[500] text-[#333d47]">
              <a
                href="#"
                className="text-[#0078D4] hover:text-[#005AA0] hover:underline transition-colors duration-200"
              >
                Elegant Themes Blog & Tutorials
              </a>
            </li>
          </ul>

          {/* External DIVI Resources */}
          <h4 className="text-[#1c2a38] text-[18px] pb-[10px] font-[700] leading-[23px] mt-[1rem]">
            External DIVI Resources:
          </h4>

          <ul className="pl-[1.5rem] pb-[23px] list-disc space-y-[0.75rem]">
            <li className="pl-[0.5rem] text-[14px] text-[#0078D4] leading-[26px] hover:underline">
              <a
                href="https://www.udemy.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Udemy Course – How to Make a WordPress Website with the Divi
                Theme
              </a>
            </li>
            <li className="pl-[0.5rem] text-[14px] leading-[26px] text-[#333d47]">
              YouTube: Divi Theme Tutorials —{" "}
              <a
                href="https://www.youtube.com/results?search_query=Divi+Theme+Tutorial"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0078D4] hover:underline"
              >
                (Search for “Divi Theme Tutorial” on YouTube)
              </a>
            </li>
            <li className="pl-[0.5rem] text-[14px] text-[#0078D4] leading-[26px] hover:underline">
              <a
                href="https://www.udemy.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                WPBeginner’s Guide to Divi
              </a>
            </li>
            <li className="pl-[0.5rem] text-[14px] text-[#0078D4] leading-[26px] hover:underline">
              <a
                href="https://www.udemy.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Community Forums & Facebook Groups
              </a>
            </li>
            <li className="pl-[0.5rem] text-[14px]  leading-[26px]">
              Elegant Themes Live Chat Support: Access via your Elegant Themes
              account.
            </li>
          </ul>
        </section>

        {/* 6. WPMUdev */}
        <section id="section6" className="mb-6">
          <ol className="list-decimal list-inside" start={6}>
            <li className="text-[2rem] md:text-[2.25rem]  font-[700] text-[#005AA0] mt-16 mb-6 pb-3 border-b border-[#e1e5eb]">
              WPMUdev (WordPress Plugins)
            </li>
          </ol>

          <p className="text-[14px] font-[500] leading-[25px] text-[#333d47]">
            WPMUdev extends your charity’s website functionality with a range of
            essential WordPress plugins.
          </p>

          <h3 className="text-[24px] leading-[31px] font-[700] text-[#0078D4] mt-10 mb-4">
            6.1. Setup Process
          </h3>

          <ul className="pl-[1.5rem] pb-[23px] list-disc space-y-[0.75rem]">
            <li className="leading-[26px] pl-[0.5rem] text-[14px] font-[500] text-[#333d47]">
              <span className="font-[600] text-[#1c2a38]">
                Identify Useful Plugins:{" "}
              </span>
              Install plugins from WPMUdev that boost site performance,
              security, SEO, and more.
            </li>
            <li className="leading-[26px] pl-[0.5rem] text-[14px] font-[500] text-[#333d47]">
              <span className="font-[600] text-[#1c2a38]">Configuration: </span>
              Follow the installation and configuration instructions provided in
              the WPMUdev dashboard.
            </li>
          </ul>

          <h3 className="text-[24px] leading-[31px] font-[700] text-[#0078D4] mt-[3rem] mb-6">
            6.2. Learning Resources
          </h3>

          <p className="leading-[26px] mb-[0.75rem] text-[14px] font-[500] text-[#333d47]">
            WPMUdev provides extensive documentation for each of its pro
            plugins. Here are the direct links to the documentation for their
            most popular tools:
          </p>

          <ul className="pl-[1.5rem] pb-[23px] list-disc space-y-[0.75rem]">
            <li className="leading-[26px] pl-[0.5rem] text-[14px] font-[500] text-[#333d47]">
              <a
                href="#"
                className="text-[#0078D4] hover:text-[#005AA0] hover:underline transition-colors duration-200"
              >
                Smush Pro (Image Optimization)
              </a>
            </li>
            <li className="leading-[26px] pl-[0.5rem] text-[14px] font-[500] text-[#333d47]">
              <a
                href="#"
                className="text-[#0078D4] hover:text-[#005AA0] hover:underline transition-colors duration-200"
              >
                Hummingbird Pro (Performance & Caching)
              </a>
            </li>
            <li className="leading-[26px] pl-[0.5rem] text-[14px] font-[500] text-[#333d47]">
              <a
                href="#"
                className="text-[#0078D4] hover:text-[#005AA0] hover:underline transition-colors duration-200"
              >
                Defender Pro (Security)
              </a>
            </li>
            <li className="leading-[26px] pl-[0.5rem] text-[14px] font-[500] text-[#333d47]">
              <a
                href="#"
                className="text-[#0078D4] hover:text-[#005AA0] hover:underline transition-colors duration-200"
              >
                Forminator Pro (Forms & Surveys)
              </a>
            </li>
            <li className="leading-[26px] pl-[0.5rem] text-[14px] font-[500] text-[#333d47]">
              <a
                href="#"
                className="text-[#0078D4] hover:text-[#005AA0] hover:underline transition-colors duration-200"
              >
                Snapshot Pro (Backups)
              </a>
            </li>
            <li className="leading-[26px] pl-[0.5rem] text-[14px] font-[500] text-[#333d47]">
              <a
                href="#"
                className="text-[#0078D4] hover:text-[#005AA0] hover:underline transition-colors duration-200"
              >
                Branda Pro (White Labeling)
              </a>
            </li>
          </ul>
          <p className="leading-[26px] mb-[0.75rem] text-[14px] font-[500] text-[#333d47]">
            For general tutorials and community support, you can also visit the{" "}
            <a
              href="#"
              className="text-[#0078D4] hover:text-[#005AA0] hover:underline transition-colors duration-200"
            >
              WPMUdev Blog
            </a>
            and their
            <a
              href="#"
              className="text-[#0078D4] hover:text-[#005AA0] hover:underline transition-colors duration-200"
            >
              Community Forums.
            </a>
          </p>
        </section>

        {/* 7. Microsoft Clarity */}
        <section id="section7" className="mb-6">
          <ol className="list-decimal list-inside" start={7}>
            <li className="text-[2rem] md:text-[2.25rem]  font-[700] text-[#005AA0] mt-16 mb-6 pb-3 border-b border-[#e1e5eb]">
              Microsoft Clarity (Analytics)
            </li>
          </ol>

          <p className="text-[14px] font-[500] leading-[25px] text-[#333d47]">
            Microsoft Clarity provides insights into how users interact with the
            charity website so you can optimize its performance.
          </p>

          <h3 className="text-[24px] leading-[31px] font-[700] text-[#0078D4] mt-10 mb-4">
            7.1. Setup Process
          </h3>

          <ul className="pl-[1.5rem] p-[0_0_23px_1em] list-disc">
            <li className="pl-[0.5rem] mb-[0.75rem] text-[14px] font-[500] text-[#333d47]">
              <span className="font-[700]">
                Install Plugin or Embed Script:{" "}
              </span>
              Add the Microsoft Clarity plugin via WordPress or embed the
              tracking script in the website’s header.
            </li>
            <li className="pl-[0.5rem] mb-[0.75rem] text-[14px] font-[500] text-[#333d47]">
              <span className="font-[700]">
                Monitor and Analyze User Behavior:{" "}
              </span>
              Use the dashboard to view heatmaps, session recordings, and other
              insights.
            </li>
          </ul>

          <h3 className="text-[24px] leading-[31px] font-[700] text-[#0078D4] mt-[3rem] mb-6">
            7.2. Learning Resources
          </h3>

          <h4 className="text-[#1c2a38] text-[18px] pb-[10px] font-[700] leading-[23px] mt-[1rem]">
            Official Microsoft Clarity Resources:
          </h4>

          <ul className="pl-[1.5rem] p-[0_0_23px_1em] list-disc">
            <li className="leading-[26px] pl-[0.5rem] mb-[0.75rem] text-[14px] font-[500] text-[#333d47]">
              <a href="#" className="text-[#0078D4]">
                Microsoft Clarity Website
              </a>
            </li>
            <li className="leading-[26px] pl-[0.5rem] mb-[0.75rem] text-[14px] font-[500] text-[#333d47]">
              <a href="#" className="text-[#0078D4]">
                Microsoft Clarity Documentation
              </a>
            </li>
          </ul>

          <h4 className="text-[#1c2a38] text-[18px] pb-[10px] font-[700] leading-[23px] mt-[1rem]">
            External Microsoft Clarity Resources:
          </h4>
          <ul className="p-[0_0_23px_1.5rem] list-disc">
            <li className="hover:underline pl-[0.5rem] mb-[0.75rem] text-[14px] leading-[26px]">
              YouTube Clarity Tutorials:
              <a
                href="https://clarity.microsoft.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0078D4]"
              >
                (Search for “Microsoft Clarity Tutorial” on YouTube.)
              </a>
            </li>
            <li className="hover:underline pl-[0.5rem] text-[#0078D4] mb-[0.75rem] text-[14px] leading-[26px]">
              <a
                href="https://clarity.microsoft.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0078D4]"
              >
                Blog Posts on Website Analytics
              </a>
            </li>
            <li className="hover:underline pl-[0.5rem] text-[#0078D4] mb-[0.75rem] text-[14px] leading-[26px]">
              <a
                href="https://clarity.microsoft.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0078D4]"
              >
                Case Studies on Clarity
              </a>
            </li>
            <li className="hover:underline pl-[0.5rem] text-[#0078D4] mb-[0.75rem] text-[14px] leading-[26px]">
              <a
                href="https://clarity.microsoft.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0078D4]"
              >
                Comparison Guides
              </a>
            </li>
            <li className="hover:underline pl-[0.5rem] text-[#0078D4] mb-[0.75rem] text-[14px] leading-[26px]">
              <a
                href="https://clarity.microsoft.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0078D4]"
              >
                Tech Community Discussions
              </a>
            </li>
          </ul>
        </section>

        {/* 8. Tawk.to */}
        <section id="section8" className="mb-6">
          <ol className="list-decimal list-inside" start={8}>
            <li className="text-[2rem] md:text-[2.25rem]  font-[700] text-[#005AA0] mt-16 mb-6 pb-3 border-b border-[#e1e5eb]">
              Tawk.to Live Chat (Support)
            </li>
          </ol>
          <h3 className="text-[24px] leading-[31px] font-[700] text-[#0078D4] mt-10 mb-4">
            8.1. Setup Process
          </h3>

          <ul className="pl-[1.5rem] p-[0_0_23px_1em] list-disc">
            <li className="pl-[0.5rem] mb-[0.75rem] text-[14px] font-[500] text-[#333d47]">
              Create an account at{" "}
              <a href="#" className="text-[#0078D4]">
                Tawk.to.
              </a>
            </li>
            <li className="pl-[0.5rem] mb-[0.75rem] text-[14px] font-[500] text-[#333d47]">
              Follow the setup wizard to create a property for the charitys
              website.
            </li>
            <li className="pl-[0.5rem] mb-[0.75rem] text-[14px] font-[500] text-[#333d47]">
              Install the Tawk.to WordPress plugin or add the provided
              JavaScript snippet to the websites footer.
            </li>
            <li className="pl-[0.5rem] mb-[0.75rem] text-[14px] font-[500] text-[#333d47]">
              Customize the chat widgets appearance and settings in the Tawk.to
              dashboard.
            </li>
          </ul>

          <h3 className="text-[24px] leading-[31px] font-[700] text-[#0078D4] mt-[3rem] mb-6">
            8.2. Learning Resources
          </h3>
          <ul className="p-[0_0_23px_1.5rem] list-disc">
            <li className="hover:underline pl-[0.5rem] mb-[0.75rem] text-[14px] text-[#0078D4] leading-[26px]">
              <a
                href="https://www.tawk.to"
                target="_blank"
                rel="noopener noreferrer"
              >
                Tawk.to Help Center
              </a>
            </li>
            <li className="hover:underline pl-[0.5rem] mb-[0.75rem] text-[14px] text-[#0078D4] leading-[26px]">
              <a
                href="https://www.tawk.to"
                target="_blank"
                rel="noopener noreferrer"
              >
                Tawk.to YouTube Channel
              </a>
            </li>
          </ul>
        </section>

        {/* 9. Azure AI Language */}
        <section id="section9" className="mb-6">
          <ol className="list-decimal list-inside" start={9}>
            <li className="text-[2rem] md:text-[2.25rem]  font-[700] text-[#005AA0] mt-16 mb-6 pb-3 border-b border-[#e1e5eb]">
              Azure AI Language (Custom Question Answering)
            </li>
          </ol>

          <p className="text-[14px] font-[500] leading-[25px] text-[#333d47]">
            Custom Question Answering, a feature of Azure AI Language, is the
            new version of QnA Maker and is used to build a knowledge base for
            conversational AI.
          </p>

          <h3 className="text-[24px] leading-[31px] font-[700] text-[#0078D4] mt-10 mb-4">
            9.1. Setup Process
          </h3>

          <ul className="pl-[1.5rem] p-[0_0_23px_1em] list-disc">
            <li className="pl-[0.5rem] mb-[0.75rem] text-[14px] font-[500] text-[#333d47]">
              Navigate to the{" "}
              <a href="#" className="text-[#0078D4]">
                Azure Language Studio.
              </a>
            </li>
            <li className="pl-[0.5rem] mb-[0.75rem] text-[14px] font-[500] text-[#333d47]">
              Create a new Language resource and ensure the Custom question
              answering feature is enabled.
            </li>
            <li className="pl-[0.5rem] mb-[0.75rem] text-[14px] font-[500] text-[#333d47]">
              Create a new project, linking it to existing content sources like
              FAQs or product manuals to build the knowledge base.
            </li>
            <li className="pl-[0.5rem] mb-[0.75rem] text-[14px] font-[500] text-[#333d47]">
              Train, test, and deploy the project to get a queryable endpoint
              for your application or bot.
            </li>
          </ul>

          <h3 className="text-[24px] leading-[31px] font-[700] text-[#0078D4] mt-[3rem] mb-6">
            9.2. Learning Resources
          </h3>

          <ul className="pl-[1.5rem] p-[0_0_23px_1em] list-disc">
            <li className="leading-[26px] pl-[0.5rem] mb-[0.75rem] text-[14px] font-[500] text-[#333d47]">
              <a href="#" className="text-[#0078D4]">
                Custom Question Answering Documentation
              </a>
            </li>

            <li className="leading-[26px] pl-[0.5rem] mb-[0.75rem] text-[14px] font-[500] text-[#333d47]">
              <a href="#" className="text-[#0078D4]">
                Azure AI Language Documentation
              </a>
            </li>

            <li className="leading-[26px] pl-[0.5rem] mb-[0.75rem] text-[14px] font-[500] text-[#333d47]">
              <a href="#" className="text-[#0078D4]">
                Microsoft Learn: Create a Question Answering Solution
              </a>
            </li>
          </ul>
        </section>

        {/* 10. Final Notes */}
        <section id="section10" className="mb-6">
          <ol className="list-decimal list-inside" start={10}>
            <li className="text-[2rem] md:text-[2.25rem]  font-[700] text-[#005AA0] mt-16 mb-6 pb-3 border-b border-[#e1e5eb]">
              Final Notes
            </li>
          </ol>

          <p className="text-[14px] font-[500] leading-[25px] text-[#333d47]">
            By following the steps in this guide and using the linked resources:
          </p>

          <ul className="mt-[20px] pl-[1.5rem] p-[0_0_23px_1em] list-disc">
            <li className="pl-[0.5rem] mb-[0.75rem] text-[14px] font-[500] text-[#333d47]">
              You will be able to efficiently set up new charity accounts,
              configure domain management, secure email hosting, and create a
              robust web presence using the tools FFC supports.
            </li>
            <li className="pl-[0.5rem] mb-[0.75rem] text-[14px] font-[500] text-[#333d47]">
              Whenever you encounter an issue—for example, with domain transfers
              or DNS configuration—refer to both the official documentation and
              trusted external tutorials for alternate perspectives and
              troubleshooting tips.
            </li>
            <li className="pl-[0.5rem] mb-[0.75rem] text-[14px] font-[500] text-[#333d47]">
              For setting up the email connection in Microsoft 365, remember
              that Microsoft’s admin portal now allows you to leverage your
              Cloudflare credentials to automatically insert the required MX,
              SPF, and DKIM records, streamlining the verification process.
            </li>
          </ul>

          <p className="pb-[1em] text-[14px] font-[500] leading-[25px] text-[#333d47]">
            This guide is designed to be both a step-by-step procedural
            reference and a gateway to deeper learning. As you gain confidence
            with each tool, you’re encouraged to explore the additional
            materials provided in the external resources sections.
          </p>
          <p className="pb-[1em] text-[14px] font-[500] leading-[25px] text-[#333d47]">
            Happy developing and supporting the charities in their mission!
          </p>
          <p className="text-[14px] font-[500] leading-[25px] text-[#333d47]">
            If you have further questions or need clarification on any of these
            steps, feel free to ask your fellow team members in the internal
            channels or consult the provided documentation links.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Index;
