import React from "react";
import FrequentlyAskedQuestions from "@/components/UI/Frequently-Asked-Questions";

const index = () => {
  return (
    <div className="py-[50px]">
      <div className="w-[90%] mx-auto lg:px-[20px]">
        <h1
          className="font-[400] text-[40px] lg:text-[48px]  tracking-[0] text-center mx-auto mb-[50px]"
          id="faustina-font"
        >
          Frequently Asked Questions
        </h1>
        <div>
          <FrequentlyAskedQuestions title="What is the organization aiming to accomplish?">
            <p className="mb-[30px]">
              While in the technical process of setting up free charity hosting
              we discovered than many small or new organizations are stuck well
              below the need for full web hosting. As an example assistance with
              setting up a charity email address with Microsoft at the charities
              domain name is needed as a first step. FFC is has refactored our
              charity on-boarding process to address email and other basic
              communication needs with free guides and hosted on our project
              site ffcdomains.org
            </p>
            <p>
              As a follow on need we identified that most charities and pre
              501c3 non profits do not create an email because they fear buying
              the wrong domain name or do not want to pay for a domain name. We
              now cover these costs and help with buying the domain name for
              supported charities.
            </p>
          </FrequentlyAskedQuestions>
          <FrequentlyAskedQuestions title="What are the organizations key strategies for making this happen?">
            <p className="mb-[30px]">
              FFC assists by paying the full cost of the .org domain name if
              available. This reduces a charitys direct hard cost instantly and
              increases adoption of formal IT systems at a very low cost per
              charity (~$16.50 per year).
            </p>
            <p>
              FFC also uses a premium VolunteerMatch subscription to source IT
              project managers, webmasters, and graphic designers to expand our
              support capacity. We are also developing partnerships with other
              charities and technology vendors for services beyond our current
              offerings.
            </p>
          </FrequentlyAskedQuestions>

          <FrequentlyAskedQuestions title="What are the organizations capabilities for doing this?">
            <p className="mb-[30px]">
              We already have enterprise-level eNOM accounts for domain
              procurement. By using WHMCS with coupon codes for 501c3 and
              pre-501c3 organizations, we can provision full hosting and domain
              names automatically without manual staff input.
            </p>
            <p>
              For training, we guide charities through Microsofts MS-900
              training and help them pursue “Microsoft 365 Grants.” We also
              offer Divi and WPMUDEV design products that come with their own
              vendor training.
            </p>
          </FrequentlyAskedQuestions>

          <FrequentlyAskedQuestions title="What have and havent they accomplished so far?">
            <p>
              While weve achieved a lot in IT hosting and consulting, one major
              goal remains — building the Free For Charity directory showcasing
              truly free nonprofit services. Current directories often charge
              hundreds of dollars per listing; ours will be 100% free and
              unbiased, highlighting verified, high-quality professional
              resources. To make this happen, were seeking grant funding for
              additional code and hosting resources.
            </p>
          </FrequentlyAskedQuestions>

          <FrequentlyAskedQuestions title="Is there a need for a charity to provide help for charities?">
            <p>
              Yes — many nonprofits still pay for services that are available
              free or at discounts simply because they dont know where to find
              them. Free For Charity fixes this with our motto: “Decisions
              should be made by metrics, not marketing.” We also recommend
              TechSoup.org, another great resource for discounted and free
              tools.
            </p>
          </FrequentlyAskedQuestions>

          <FrequentlyAskedQuestions title="Where did the idea come from?">
            <p>
              Free For Charity started when the founder served on the local
              childrens museums board of directors. Within weeks, they
              discovered the museum was paying for tools and services that were
              actually free for nonprofits. This led to a deeper look into
              procurement management and the need for better systems and
              training to help nonprofits avoid unnecessary expenses.
            </p>
          </FrequentlyAskedQuestions>

          <FrequentlyAskedQuestions title="Why do charities pay for items they can get for free?">
            <p>
              Often its due to a lack of awareness or training. Most charity
              founders and directors are experts in their mission, not in IT or
              procurement. Free For Charity helps bridge that gap so nonprofits
              can focus on their purpose without wasting money on tools they
              could get for free.
            </p>
          </FrequentlyAskedQuestions>

          <FrequentlyAskedQuestions title="Where does Free for Charity come in to help our charity or nonprofit?">
            <p>
              Free For Charity fills vital IT and administrative roles for
              nonprofits that lack budgets for full-time staff. We help reduce
              “overhead” by providing research, setup, and management work
              through trained volunteers. This allows charities to claim these
              improvements as program expenses rather than administrative
              overhead.
            </p>
          </FrequentlyAskedQuestions>

          <FrequentlyAskedQuestions title="How can I tell if we have high overhead? / My charity does not have high overhead!">
            <p>
              Many charities reduce recorded overhead by counting all staff time
              as “program work,” but that doesnt make them more efficient. If
              your directors or managers are doing tasks like bookkeeping or
              website updates, thats hidden overhead. Free For Charity helps
              replace that with skilled volunteers or technology, improving
              efficiency while keeping costs low.
            </p>
          </FrequentlyAskedQuestions>

          <FrequentlyAskedQuestions title="How do you provide your program services?">
            <p>
              We focus on efficiency — finding the best products at the lowest
              cost. By coordinating skilled volunteers and professionals, we
              deliver IT and business help at minimal or zero cost. Our
              volunteer programs give experts a way to advance their skills
              while helping charities achieve more impact with fewer resources.
            </p>
          </FrequentlyAskedQuestions>

          <FrequentlyAskedQuestions title="Are you like volunteermatch.org or other matching agencies?">
            <p>
              Not exactly. VolunteerMatch connects volunteers to charities but
              doesnt manage the projects. Free For Charity does. We handle
              project management and results internally, ensuring continuity
              even if a volunteer leaves. We also maintain long-term IT projects
              like hosting and websites with our internal web team.
            </p>
          </FrequentlyAskedQuestions>

          <FrequentlyAskedQuestions title="What do I need to get started?">
            <p>
              Simply contact us with some basic details about your charity and
              the type of projects you need help with. Fill out the form on our
              site, and well get in touch to discuss how Free For Charity can
              support your mission.
            </p>
          </FrequentlyAskedQuestions>

          <FrequentlyAskedQuestions title="How can you afford to give away free domain names?">
            <p>
              As a registered 501(c)(3) charity, we rely on individual,
              business, and grant funding. Currently, domain and hosting
              programs are funded by private contributions rather than a
              dedicated grant.
            </p>
          </FrequentlyAskedQuestions>

          <FrequentlyAskedQuestions title="Where do you get your domain name packages?">
            <p>
              We are a registered reseller of eNom domain names. eNom provides
              us with a Platinum account, offering the lowest possible pricing
              for charities of our size. As we onboard more nonprofits, our
              costs will continue to decrease.
            </p>
          </FrequentlyAskedQuestions>

          <FrequentlyAskedQuestions title="Are you really a charity?">
            <p>
              Yes. Free For Charity has held IRS 501(c)(3) status since 2014.
              Weve spent years building and testing systems that help
              nonprofits reduce overhead. Our EIN is 46-2471893, and our
              Guidestar profile is public.
            </p>
          </FrequentlyAskedQuestions>

          <FrequentlyAskedQuestions title="Why do I not see hosting as an option?">
            <p className="mb-[20px]">
              We currently have a backlog for new sites and support, processing
              at least one new charity per week.
            </p>
            <p>
              <strong>Ways to get in faster:</strong>
              <br />
              1. If you already have your 501(c)(3), get your free domain from
              us at{" "}
              <a
                href="https://freeforcharity.org/domains"
                className="text-[#1c6e92] underline"
                target="_blank"
              >
                freeforcharity.org/domains
              </a>
              <br />
              2. If you can provide your own qualified WordPress webmaster, you
              may be moved up in the queue.
            </p>
          </FrequentlyAskedQuestions>

          <FrequentlyAskedQuestions title="If I am an individual or business and donate money for a domain package to Free for Charity, is this tax-deductible?">
            <p>
              Yes. Free For Charity is a registered 501(c)(3) organization, and
              donations are tax-deductible. Our EIN is 46-2471893. Upon
              checkout, youll receive a receipt for your accountant. Businesses
              can deduct contributions either as a donation or as an expense,
              depending on their accountants guidance.
            </p>
          </FrequentlyAskedQuestions>
        </div>
      </div>
    </div>
  );
};

export default index;
