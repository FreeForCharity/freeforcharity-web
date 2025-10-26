import React from "react";
import HeroSection from "@/components/UI/HeroSection";
import HelpForCharities from "@/components/UI/help-for-charity";
import AccordionItem from "@/components/UI/Accordian";
import ReadyToGetStarted from "@/components/help-for-charities-components/Ready-to-Get-Started-Now";
import CharityNonprofitDirectorFaq from "@/components/help-for-charities-components/Charity-Nonprofit-Director-Faq";
import CallSection from "@/components/help-for-charities-components/call-section";


const index = () => {
  return (
    <div className="w-full">
      <div className="bg-[#FCFCFC]">
        <HeroSection
          heading="Pre-501(c)3 Onboarding Guide"
          paragraph="If you are representing a charity or you currently work for a charity and want to improve your own skills start here to get help for your organization. You get instant access to many of our free tools and products right away!"
          heroImg="/Images/volunteer.png"
        />

        <div className="pt-20 pb-7">
          <HelpForCharities
            title="Help For Charities and Nonprofit Groups from an Unbiased Fellow Charity"
            description="Free for Charity is working every day to provide your charity, and you the charity or nonprofit director with the tools and techniques needed to thrive, FREE. Sign up today to get access to all of this for your nonprofit or charity group today even if you are still pending final 501c3 status."
          />

          <div className="h-[75px] w-full"></div>
          <HelpForCharities title="Free For Charity Products and Services" />

          <HelpForCharities
            title="–Establishment and Governance Support–"
            description="At Free For Charity, we understand the importance of Non Profit Establishment and Governance Support. We are here to provide help for charities by offering expertise in effective business and technology management. Our dedicated team of volunteers works to manage all aspects of your charity’s projects, we help you find the software and tools you need to thrive."
            descriptionAlign="left"
          />
          <HelpForCharities
            description="Looking to establish and govern your charity? We’ve got you covered. Our services include support for Charity Mission Plan “Pitch Deck” assistance, full plan development with budgeting and mission sections for IRS 1023 501c3 application, and consultation on initial board considerations. We also provide support for state and local nonprofit establishment, federal 501c3 nonprofit establishment, charity banking services, charity donation processing, and more. With Free For Charity, we connect students, professionals, and businesses with charities in need. Contact us today to get started on your charity’s mission!"
            descriptionAlign="left"
          />
        </div>
      </div>

      <div className="w-full bg-[#FCFCFC] pb-6">
        <div className="w-full max-w-[90%] mx-auto">
          <AccordionItem
            number="1"
            title="  Charity Mission Plan “Pitch Deck” Assistance (Powered by Liveplan.com AI)"
          >
            Are you a charity looking to create the perfect pitch deck for your
            mission? Look no further! At Free For Charity, we offer free
            one-on-one consulting sessions to help you craft a Charity Mission
            Plan “Pitch Deck” that will leave a lasting impression. Powered by
            Liveplan.com AI, our talented team of MBA’s will work closely with
            you to understand your goals, values, and impact. We’ll help you
            create a compelling narrative, captivating visuals, and persuasive
            language that effectively communicates your mission to potential
            donors, partners, and stakeholders. With our expertise and the power
            of artificial intelligence, your pitch deck will stand out from the
            crowd and inspire support for your cause.
          </AccordionItem>

          <AccordionItem
            number="2"
            title=" Full Charity Mission Plan Assistance (Powered by Liveplan.com AI)"
          >
            Unlocking the full potential of your charity requires a
            comprehensive plan that aligns with your mission and goals. With our
            Full Charity Mission Plan (Powered by Liveplan.com AI), you gain the
            valuable tools and insights needed to drive impactful change.
            Partnering with Free For Charity and Live Plan AI, your organization
            receives strategic guidance, data-driven analysis, and innovative
            solutions tailored to your specific needs. Together, we empower your
            charity to make a lasting difference in the world.
          </AccordionItem>

          <AccordionItem
            number="3"
            title=" Initial Board Considerations Consultation"
          >
            Introducing Charity Board – your modern solution for effective board
            management. With our innovative features, we ensure seamless
            operations and empower your board to make a lasting impact. Enjoy
            the convenience of a single mandatory annual meeting, streamlining
            your board’s commitment. Embrace the digital age with our virtual
            meetings, facilitating collaboration and saving valuable time. Our
            online voting system empowers board members to participate and
            contribute, even from a distance. Enhance your board’s capabilities
            with specialized training, including QuickBooks review, enabling
            efficient ad hoc management. Seamlessly handle board member
            elections and removals for a smooth transition of leadership.
            Additionally, our structured board roles and mandatory officers
            ensure clear accountability and maximum efficiency. With dedicated
            committees such as Volunteer Management, Technology Management, and
            Fundraising, we facilitate targeted efforts for optimum results.
            Trust in our comprehensive conflict of interest policies to maintain
            transparency and uphold ethical standards. Join Charity Board today
            and revolutionize your board’s potential.
          </AccordionItem>

          <AccordionItem
            number="4"
            title=" State and Local Nonprofit Establishment Support"
          >
            The State and Local Nonprofit Establishment Support Product, powered
            by Northwest Registered Agent. With our State Level C Corp setup,
            you can set up your initial company documents and regeneter with the
            state of your founding. We also help with setting up your
            nonprofit’s charitable solicitation registration at the state level.
            We understand the unique needs of nonprofits and are dedicated to
            helping you navigate the complex process of establishment.
          </AccordionItem>

          <AccordionItem
            number="5"
            title=" Charity Banking Services Consultation"
          >
            Setting up your first nonprofit bank account is an important step
            towards managing your organization’s finances. At Free For CHarity
            we reccomend both a Ground Bank, Wells Fargo and an online brokerage
            account, Edward Jones. We understand the unique needs of nonprofit
            organizations. With our expertise and dedicated support, we can help
            you navigate through the process and ensure that your funds are
            secure.
          </AccordionItem>

          <AccordionItem
            number="6"
            title=" Federal 501c3 Nonprofit Establishment Support"
          >
            Setting up your Federal 501c3 Nonprofit Establishment is now easier
            than ever. At Free For Charity, we provide comprehensive assistance
            in obtaining your IRS Direct EIN Number and 501c3 Tax Exempt 1023
            Application. Powered by Northwest Registered Agent, our team of
            talented professionals will guide you through the entire process,
            ensuring a seamless and successful application. Take advantage of
            our expertise and let us help you make a difference.
          </AccordionItem>

          <AccordionItem
            number="7"
            title=" Charity Donation Processing Consultation"
          >
            Are you ready to make a difference? Setting up your initial online
            donation systems is crucial for the success of your charity. With
            PayPal, Facebook, Stripe, and a bank direct Merchant Account, you
            can easily collect online and inperson donations to support your
            cause. At Free For Charity, we understand the importance of
            efficient donation processing, which is why we offer comprehensive
            assistance in setting up these systems. Don’t miss out on the
            opportunity to connect with donors and amplify your impact. Start
            your journey with us today.
          </AccordionItem>

          <AccordionItem
            number="8"
            title=" Free For Charity - Pre 501c3 General Technology Package"
          >
            <ul className="list-disc list-inside">
              <li>Initial LastPass Password Management Account</li>
              <li>
                Initial Microsoft{" "}
                <a
                  href="mailto:yourcharityname@outlook.com"
                  className="text-[#2ea3f2]"
                >
                  yourcharityname@outlook.com
                </a>{" "}
                organizational email address
              </li>
              <li>
                Initial Google{" "}
                <a
                  href="mailto:yourcharityname@gmail.com"
                  className="text-[#2ea3f2]"
                >
                  yourcharityname@gmail.com
                </a>{" "}
                organizational email address
              </li>
              <li>
                Free For Charity Domain Name Registration yourcharityname.org
              </li>
              <li>
                Initial Charity Email Routing{" "}
                <a
                  href="mailto:info@yourcharityname.org"
                  className="text-[#2ea3f2]"
                >
                  info@yourcharityname.org
                </a>
              </li>
              <li>Initial Charity WordPress Website for IRS application</li>
              <li>
                Initial Facebook Page for volunteers / location / region
                management
              </li>
              <li>
                Initial LinkedIn Page for volunteers / location / region
                management
              </li>
              <li>
                Optional ‘non 501c3’ Microsoft 365 Account Setup
                <ul className="list-disc list-inside ml-6 mt-2">
                  <li>
                    Used if you are a sub chapter of a national charity or are
                    not a ‘qualified organization’ for the main Microsoft Grant
                    but are charitable in nature to receive ‘Free For Charity’
                    support
                  </li>
                </ul>
              </li>
            </ul>
          </AccordionItem>
        </div>
      </div>
      <ReadyToGetStarted />
      <CharityNonprofitDirectorFaq />
      <ReadyToGetStarted />
      <CallSection />
    </div>
  );
};

export default index;
