import React, { useEffect, useState } from 'react';
import '../index.css';

function Timeline() {

    const [toggleTime, setToggleTime] = useState<string | number>('2023');

    const handleTimeline = (selectedYear: string) => {
        setToggleTime(selectedYear);
    };

    const events: { [key: number]: JSX.Element } = {
        2023: (
            <div className='2023 flex flex-col items-center justify-center'>
                <div className='flex justify-center mt-5'>
                    <h1 className='year-h1'>2023</h1>
                </div>
                <div className='bg-white shadow-lg p-5 mt-5 rounded-md mx-5'>
                <h1 className='month-h1'>April 24</h1>
                <p className='timeline-p'>The twelfth Interactive Dialogue of the General Assembly on Harmony with Nature was held to commemorate International Mother Earth Day in order to discuss the possibility of convening and the scope of a high-level meeting, tentatively entitled “Earth Assembly”, to be held on 22 April 2024, so that an evolving non-anthropocentric or Earth-centred paradigm continues to reinforce multilateralism through the discussion of alternative holistic approaches based on diverse worldviews that may contribute to the implementation of the 2030 Agenda for Sustainable Development and beyond.</p>
                </div>
            </div>
        ),
        2022: (
            <div className='2022'>
                <div className='flex justify-center mt-5'>
                    <h1 className='year-h1'>2022</h1>
                </div>
                <div className='bg-white shadow-lg p-5 mt-5 rounded-md mx-5'>
                <h1 className='month-h1'>December 28</h1>
                <h2>The UN General Assembly, at its 77th session, adopted the thirteenth resolution on Harmony with Nature (A/RES/77/169). This resolution requests, the President of the General Assembly, among others:</h2>
                <p className='timeline-p'>1. To discuss the possibility of convening and the scope of a high-level meeting, tentatively entitled “Earth Assembly”, to be held on 22 April 2024, so that an evolving non-anthropocentric or Earth-centred paradigm continues to reinforce multilateralism through the discussion of alternative holistic approaches based on diverse world views that may contribute to the implementation of the 2030 Agenda for Sustainable Development17 and beyond.</p>
                <p className='timeline-p'>2. Notes with appreciation the proposal by the Head of State of the Plurinational State of Bolivia to establish a group of friends of Harmony with Nature, with a view to making innovative, transformative and action-oriented proposals for responding to present and future challenges, grounded in equity and justice.</p>
                </div>

                <div className='bg-white shadow-lg p-5 mt-5 rounded-md mx-5'>
                <h1 className='month-h1'>July 28</h1>
                <p className='timeline-p'>The eleventh report of the Secretary-General on Harmony with Nature was published (A/77/244). The report recognizes the advances in Earth Jurisprudence, in particular through the Rights of Nature and Ecological Economics, and joint efforts by Member States to create a new narrative for a regenerative world in which Human Rights go hand in hand with the Rights of Nature, and sustainable development is reframed to ensure planetary health and the well-being of future generations. The content of the report is drawn from the interactive dialogue, which featured presentations by parliamentarians and civil society organizations collaborating to bring about a paradigm shift. It also serves to showcase other initiatives from around the world that demonstrate actions for living in Harmony with Nature. Emphasis is placed on how law and economics must be nested within Nature, as should all institutions of human society.</p>
                </div>

                <div className='bg-white shadow-lg p-5 mt-5 rounded-md mx-5'>
                <h1 className='month-h1'>April 22</h1>
                <p className='timeline-p'>The eleventh Interactive Dialogue of the General Assembly on Harmony with Nature was held to commemorate International Mother Earth Day under the title “Harmony with Nature and Biodiversity: Contributions of Ecological Economics and Earth-centered law” The Dialogue discussed the implementation of both disciplines and how they interact in the context of sustainable development.</p>
                </div>
            </div>
        ),
        2021: (<div className='2021'>
            <div className='flex justify-center mt-5'>
                <h1 className='year-h1'>2021</h1>
            </div>
            <div className='bg-white shadow-lg p-5 mt-5 rounded-md mx-5'>
            <h1 className='month-h1'>December 31</h1>
            <p className='timeline-p'>Owing to the coronavirus pandemic (COVID-19) no activities were held this year.</p>
            </div>
        </div>
        ),
        2020: (
            <div className='2020'>
                <div className='flex justify-center mt-5'>
                    <h1 className='year-h1'>2020</h1>
                </div>
                <div className='bg-white shadow-lg p-5 mt-5 rounded-md mx-5'>
                <h1 className='month-h1'>December 21</h1>
                <p className='timeline-p'>The UN General Assembly, at its 75th session, adopted the twelfth resolution on Harmony with Nature (A/RES/75/220). This resolution requests the President of the General Assembly, among others to:</p>
                <p className='timeline-p'>1. Convene, at the seventy-sixth session of the Assembly, an interactive dialogue, to be held at the plenary meetings to be convened during the commemoration of International Mother Earth Day on 22 April 2022, with the participation of Member States, the United Nations system, independent experts and other relevant stakeholders, to discuss the relationship between harmony with nature and the protection of biological diversity, and to inspire citizens and societies to reconsider how they interact with the natural world in the context of sustainable development;</p>
                <p className='timeline-p'>2. Encourage the experts of the Harmony with Nature Knowledge Network to carry out a study of the evolution of regional, local and national initiatives on the protection of Mother Earth, as applicable, to be considered by the Secretary-General in his report on the implementation of the present resolution;</p>
                <p className='timeline-p'>3. Submit to the General Assembly at its seventy-seventh session a report on the implementation of the present resolution, and decides to include in the provisional agenda of its seventy-seventh session, under the item entitled “Sustainable development”, the sub-item entitled “Harmony with Nature”.</p>
                </div>

                <div className='bg-white shadow-lg p-5 mt-5 rounded-md mx-5'>
                <h1 className='month-h1'>July 28</h1>
                <p className='timeline-p'>The tenth report of the Secretary-General on Harmony with Nature was published (A/75/266). The context of the report is therefore one of a global human health crisis. Written 10 years after the First Interactive Dialogue of the General Assembly on Harmony with Nature, held in 2010, and commemorating a decade of programme activitiy since the adoption of the first resolution on Harmony with Nature in 2009, the report contains an outline of some of the most recent and hopeful advances on Earth Jurisprudence, with a focus on ecological economics and Earth-centered law, rooted in non-anthropocentric teachings further demonstrating a paradigm shift from a human-centered to an Earth-centered society in the implementation of the 2030 Agenda for Sustainable Development. A special Supplement complementing the present report highlighting advances in law and policy, and initiatives in both formal and informal education, learning and public outreach activities worldwide was also published.</p>
                </div>

                <div className='bg-white shadow-lg p-5 mt-5 rounded-md mx-5'>
                <h1 className='month-h1'>April 22</h1>
                <p className='timeline-p'>Owing to the coronavirus pandemic (COVID-19), the tenth interactive dialogue of the General Asembly was cancelled.</p>
                </div>
            </div>
        ),
        2019: (
            <div className='2019'>
                <div className='flex justify-center mt-5'>
                    <h1 className='year-h1'>2019</h1>
                </div>
                <div className='bg-white shadow-lg p-5 mt-5 rounded-md mx-5'>
                <h1 className='month-h1'>December 19</h1>
                <p className='timeline-p'>The UN General Assembly, at its 74th session, adopted the eleventh resolution on Harmony with Nature (A/RES/74/224). This resolution requests the President of the General Assembly, among others to:</p>

                <p className='timeline-p'>1. Convene the tenth Interactive Dialogue of the General Assembly on Harmony with Nature to discuss and compare regional, national and local initiatives over the past decade, including actions and transformations in law, policy and education on Earth Jurisprudence, as well as to discuss the relationship between harmony with nature and the protection of biological diversity, and to inspire citizens and societies to reconsider how they interact with the natural world in the context of sustainable development.</p>

                <p className='timeline-p'>The resolution, among others:</p>

                <p className='timeline-p'>1. Encourages the experts of the Harmony with Nature Knowledge Network to carry out a study of the evolution over the past decade of regional, local and national initiatives on the protection of Mother Earth, as applicable, to be considered by the Secretary-General in his report on the implementation of the present resolution;</p>

                <p className='timeline-p'>2. Recognizes that protecting and conserving ecosystems and avoiding harmful practices against animals, plants, microorganisms and non-living environments contributes to the coexistence of humankind in Harmony with Nature.</p>
                </div>

                <div className='bg-white shadow-lg p-5 mt-5 rounded-md mx-5'>
                <h1 className='month-h1'>July 26</h1>
                <p className='timeline-p'>The ninth report of the Secretary-General on Harmony with Nature was published (A/74/236).</p>
                </div>

                <div className='bg-white shadow-lg p-5 mt-5 rounded-md mx-5'>
                <h1 className='month-h1'>April 22</h1>
                <p className='timeline-p'>The ninth Interactive Dialogue of the General Assembly on Harmony with Nature to commemorate International Mother Earth Day discussed the contributions of Harmony with Nature in ensuring inclusive, equitable and quality education on taking urgent action to combat climate change and its impacts and to inspire citizens and societies to reconsider how they interact with the natural world in the context of sustainable development, poverty eradication and climate justice, so as to ensure that people everywhere have the relevant information and awareness for sustainable development and lifestyles in Harmony with Nature.</p>
                </div>
            </div>
        ),
        2018: (
            <div className='2018'>
                <div className='flex justify-center mt-5'>
                    <h1 className='year-h1'>2018</h1>
                </div>
                <div className='bg-white shadow-lg p-5 mt-5 rounded-md mx-5'>
                <h1 className='month-h1'>December 20</h1>
                <p className='timeline-p'>The UN General Assembly, at its 73rd session, adopted the tenth resolution on Harmony with Nature (A/RES/73/235). This resolution requests the President of the General Assembly, among others to:</p>

                <p className='timeline-p'>1. Host the ninth Interactive Dialogue of the General Assembly on Harmony with Nature to discuss the contributions of Harmony with Nature in ensuring inclusive, equitable and quality education on taking urgent action to combat climate change and its impacts and to inspire citizens and societies to reconsider how they interact with the natural world in the context of sustainable development, poverty eradication and climate justice, so as to ensure that people everywhere have the relevant information and awareness for sustainable development and lifestyles in Harmony with Nature.</p>

                <p className='timeline-p'>The resolution, among others:</p>

                <p className='timeline-p'>1. Encourages the experts of the Harmony with Nature Knowledge Network to carry out a study of local and national initiatives on the protection of Mother Earth, as applicable.</p>

                <p className='timeline-p'>2. Recognizes that protecting ecosystems and avoiding harmful practices against animals, plants, microorganisms and non-living environments contributes to the coexistence of humankind in Harmony with Nature.</p>
                </div>

                <div className='bg-white shadow-lg p-5 mt-5 rounded-md mx-5'>
                <h1 className='month-h1'>July 23</h1>
                <p className='timeline-p'>The eighth report of the Secretary-General on Harmony with Nature was published (A/73/221).</p>
                </div>

                <div className='bg-white shadow-lg p-5 mt-5 rounded-md mx-5'>
                <h1 className='month-h1'>April 23</h1>
                <p className='timeline-p'>The eighth Interactive Dialogue of the General Assembly on Harmony with Nature to commemorate International Mother Earth Day is to inspire citizens and societies to reconsider how they interact with the natural world and to improve the ethical basis of the relationship between humankind and the Earth in the context of sustainable development, and discussed sustainable production and consumption patterns in harmony with nature, so as to ensure that people everywhere have the relevant information and awareness for sustainable development and lifestyles in Harmony with Nature.</p>
                </div>
            </div>
        ),
        2017: (
            <div className='2017'>
                <div className='flex justify-center mt-5'>
                    <h1 className='year-h1'>2017</h1>
                </div>
                <div className='flex grow flex-wrap justify-center'>
                <div className='bg-white shadow-lg p-5 mt-5 rounded-md mx-5'>
                <h1 className='month-h1'>December 20</h1>
                <p className='timeline-p'>The UN General Assembly, at its 72nd session, adopted the ninth Resolution on Harmony with Nature (A/RES/72/223). This resolution requests the President of the General Assembly, among others, to:</p>

                <p className='timeline-p'>1. Host the eighth Interactive Dialogue of the General Assembly on Harmony with Nature to inspire citizens and societies to reconsider how they interact with the natural world and to improve the ethical basis of the relationship between humankind and the Earth in the context of sustainable development, and to discuss sustainable production and consumption patterns in harmony with nature, so as to ensure that people everywhere have the relevant information and awareness for sustainable development and lifestyles in Harmony with Nature.</p>

                <p className='timeline-p'>The Resolution notes, among others:</p>

                <p className='timeline-p'>1. That some countries are discussing the possibility of considering a declaration on the protection of nature;</p>

                <p className='timeline-p'>2. That both formal and informal educational activities on the rights of nature have arisen in the professional and public spheres in some countries in the context of the promotion of sustainable development, and encouraging a holistic approach of education and public awareness for sustainable development in its three dimensions;</p>

                <p className='timeline-p'>3. And further notes the work of the experts of the Harmony with Nature Knowledge Network, who have initiated important activities to support the United Nations with the goal of ensuring that people everywhere have the relevant information and awareness for sustainable development and lifestyles in harmony with nature, as set out in target 12.8 of the Sustainable Development Goals,</p>
                </div>

                <div className='bg-white shadow-lg p-5 mt-5 rounded-md mx-5 w-full md:w-[45%]'>
                <h1 className='month-h1'>July 19</h1>
                <p className='timeline-p'>The Seventh Report of the Secretary-General on Harmony with Nature was published (A/72/175).</p>
                </div>

                <div className='bg-white shadow-lg p-5 mt-5 rounded-md mx-5 w-full md:w-[45%]'>
                <h1 className='month-h1'>April 21</h1>
                <p className='timeline-p'>The seventh Interactive Dialogue of the General Assembly on Harmony with Nature to commemorate International Mother Earth Day addressing Earth jurisprudence and the Sustainable Development agenda.</p>
                </div>
                </div>
            </div>
        ),
        2016: (
            <div className='2016'>
                <div className='flex justify-center mt-5'>
                    <h1 className='year-h1'>2016</h1>
                </div>
<div className='flex grow flex-wrap justify-center'>
                <div className='bg-white shadow-lg p-5 mt-5 rounded-md mx-5'>
                <h1 className='month-h1'>December 21</h1>
                <p className='timeline-p'>The UN General Assembly, at its 71st session, adopted the eight Resolution on Harmony with Nature (A/RES/71/232). This resolution requests the President of the General Assembly, among others, to:</p>

                <p className='timeline-p'>1. Host the seventh Interactive Dialogue of the General Assembly on Harmony with Nature addressing Earth Jurisprudence to commemorate International Mother Earth Day. The dialogue will address the experts' summary report (A/71/266) submitted by the experts of the HwN Knowledge Network as a result of the virtual dialogue held in April 2016 in which they addressed Earth Jurisprudence as mandated in General Assembly resolution (A/RES/70/208).</p>

                <p className='timeline-p'>2. Invite Member States to consider existing studies and, as appropriate, the findings and recommendations of the reports of the Secretary-Geenral on Harmony with Nature, of the experts' summary report of the virtual dialogue, addressing Earth Jurisprudence, and of the interactive dialogues of the General Assembly on Harmony with Nature.</p>

                <p className='timeline-p'>3. Take note with appreciation of the agreement between the Government of the Plurinational State of Bolivia and the Department of Economic and Social Affairs of the Secretariat, invite Member States and also relevant stakeholders to contribute to the earmarked activities related to Harmony with Nature under the trust fund of the High-Level Political Forum on Sustainable Development.</p>
                </div>

                <div className='bg-white shadow-lg p-5 mt-5 rounded-md mx-5 w-full md:w-[45%]'>
                <h1 className='month-h1'>September 23</h1>
                <p className='timeline-p'>Agreement between the Government of the Plurinational State of Bolivia and the UN Department of Economic and Social Affairs to contribute to the earmarked activities related to Harmony with Nature under the Trust Fund of the High-Level Political Forum on Sustainable Development.</p>
                </div>

                <div className='bg-white shadow-lg p-5 mt-5 rounded-md mx-5 w-full md:w-[45%]'>
                <h1 className='month-h1'>August 1</h1>
                <p className='timeline-p'>The first Experts' Summary Report on Harmony with Nature addressing Earth Jurisprudence was published (A/71/266).</p>
                </div>

                <div className='bg-white shadow-lg p-5 mt-5 rounded-md mx-5'>
                <h1 className='month-h1'>April 22</h1>
                <p className='timeline-p'>The first Virtual Dialogue of the General Assembly on Harmony with Nature to commemorate International Mother Earth Day was hosted at this website. The Dialogue addressed Earth Jurisprudence and discussed, among others:</p>

                <p className='timeline-p'>1.  The importance of applying Earth Jurisprudence principles to inspire citizens and societies to reconsider how they interact with the natural world in order to implement the Sustainable Development Goals in harmony with nature.</p>

                <p className='timeline-p'>2.  The need to recognize the intrinsic value of nature and to shift our perceptions, attitudes and behaviours from anthropocentric or human-centred, to non-anthropocentric or Earth-centred in which the planet is not considered to be an inanimate object.</p>

                <p className='timeline-p'>3.  The support for Earth Jurisprudence in laws, ethics, institutions, policies and practices, including a fundamental respect and reverence for the Earth and its natural cycles.</p>
                </div>
</div>
            </div>
        ),
        2015: (
            <div className='2015'>
                <div className='flex justify-center mt-5'>
                    <h1 className='year-h1'>2015</h1>
                </div>
                <div className='flex grow flex-wrap justify-center'>
                <div className='bg-white shadow-lg p-5 mt-5 rounded-md mx-5'>
                <h1 className='month-h1'>December 22</h1>
                <p className='timeline-p'>The UN General Assembly, at its 70th session, adopted the seventh resolution on Harmony with Nature (A/RES/70/208). This resolution for the first time:</p>

                <p className='timeline-p'>1.  Decides to initiate, in 2016, a virtual dialogue on Harmony with Nature among, inter alia, experts on Earth Jurisprudence worldwide, including those who have been active in the interactive dialogues of the General Assembly, in order to inspire citizens and societies to reconsider how they interact with the natural world in order to implement the Sustainable Development Goals in Harmony with Nature, noting that some countries recognize the rights of nature in the context of the promotion of sustainable development.</p>

                <p className='timeline-p'>2.  Further requests that the experts submit a summary of the virtual dialogue to the General Assembly at its seventy-first session.</p>

                <p className='timeline-p'>3.  Decides to host the virtual dialogue at the website on Harmony with Nature.</p>
                </div>

                <div className='bg-white shadow-lg p-5 mt-5 rounded-md mx-5 w-full md:w-[45%]'>
                <h1 className='month-h1'>August 4</h1>
                <p className='timeline-p'>The Sixth Report of the Secretary-General on Harmony with Nature was published (A/70/268).</p>
                </div>

                <div className='bg-white shadow-lg p-5 mt-5 rounded-md mx-5 w-full md:w-[45%]'>
                <h1 className='month-h1'>April 27</h1>
                <p className='timeline-p'>The fifth Interactive Dialogue of the General Assembly on Harmony with Nature to commemorate International Mother Earth Day was held. The Dialogue discussed ways of achieving sustainable development goals including addressing climate change in the post-2015 Development Agenda.</p>
                </div>
                </div>
            </div>
        ),
        2014: (
            <div className='2014'>
                <div className='flex justify-center mt-5'>
                    <h1 className='year-h1'>2014</h1>
                </div>
                <div className='flex grow flex-wrap justify-center'>
                <div className='bg-white shadow-lg p-5 mt-5 rounded-md mx-5'>
                <h1 className='month-h1'>December 19</h1>
                <p className='timeline-p'>The UN General Assembly, as its 69th session, adopted the sixth Resolution on Harmony with Nature (A/RES/69/224).This resolution requests the President of the General Assembly among others, to:</p>

                <p className='timeline-p'>1. Host the fifth Interactive Dialogue of the General of the General Assembly on Harmony with Nature to commemorate International Mother Earth Day.</p>

                <p className='timeline-p'>2. To further consider existing studies and reports to further a more ethical basis of the relationship between humanity and the Earth.</p>

                <p className='timeline-p'>3. To further build up a knowledge network to facilitate the support and recognition of the fundamental interconnection between humanity and nature.</p>

                <p className='timeline-p'>4. To promote harmony with the Earth, as found in indigenous cultures, to support efforts being made from the national down to the local community level to reflect the protection of nature.</p>
                </div>

                <div className='bg-white shadow-lg p-5 mt-5 rounded-md mx-5 w-full md:w-[45%]'>
                <h1 className='month-h1'>August 18</h1>
                <p className='timeline-p'>The fifth Report of the Secretary-General on Harmony with Nature was published (A/69/322).</p>
                </div>

                <div className='bg-white shadow-lg p-5 mt-5 rounded-md mx-5 w-full md:w-[45%]'>
                <h1 className='month-h1'>April 22</h1>
                <p className='timeline-p'>The fourth Interactive Dialogue of the General Assembly on Harmony with Nature to commemorate International Mother Earth Day was held.The Dialogue discussed key characteristics of a new, non-anthropocentric paradigm and further identified strategies on how the society subsequently would need to function consistent with this paradigm.</p>
                </div>
                </div>
            </div>
        ),
        2013: (
            <div className='2013'>
                <div className='flex justify-center mt-5'>
                    <h1 className='year-h1'>2013</h1>
                </div>
                <div className='flex grow flex-wrap justify-center'>
                <div className='bg-white shadow-lg p-5 mt-5 rounded-md mx-5'>
                <h1 className='month-h1'>December 4</h1>
                <p className='timeline-p'>The UN General Assembly, at its 68th session, adopted the fifth Resolution on Harmony with Nature (A/RES/68/216). This resolution requests the President of the General Assembly to:</p>

                <p className='timeline-p'>1.  Host the fourth Interactive Dialogue of the General Assembly on Harmony with Nature to commemorate International Mother Earth Day.</p>

                <p className='timeline-p'>2.  Invite Member States to consider existing studies and reports on Harmony with Nature, including the follow-up to the discussions at the interactive dialogues of the General Assembly, such as the dialogue held on 22 April 2013 on different economic approaches, in the context of sustainable development, in order to further a more ethical basis of the relationship between humanity and the Earth, and to promote further studies on this subject.</p>

                <p className='timeline-p'>3.  Encourage giving appropriate consideration to the issue of Harmony with Nature in the elaboration of the post-2015 development agenda.</p>

                <p className='timeline-p'>4.  Continue to further strenghten the Harmony with Nature website.</p>
                </div>

                <div className='bg-white shadow-lg p-5 mt-5 rounded-md mx-5 w-full md:w-[45%]'>
                <h1 className='month-h1'>August 15</h1>
                <p className='timeline-p'>The fourth Report of the Secretary-General on Harmony with Nature was published (A/68/325).</p>
                </div>

                <div className='bg-white shadow-lg p-5 mt-5 rounded-md mx-5 w-full md:w-[45%]'>
                <h1 className='month-h1'>April 22</h1>
                <p className='timeline-p'>The third Interactive Dialogue of the General Assembly on Harmony with Nature to commemorate International Mother Earth Day was held. The Dialogue discussed different economic approaches to further a more ethical basis for the relationship between humanity and the Earth.</p>
                </div>
                </div>
            </div>
        ),
        2012: (
            <div className='2012'>
                <div className='flex justify-center mt-5'>
                    <h1 className='year-h1'>2012</h1>
                </div>
                <div className='bg-white shadow-lg p-5 mt-5 rounded-md mx-5'>
                <h1 className='month-h1'>December 21</h1>
                <p className='timeline-p'>The UN General Assembly, at its 67th session, adopted the fourth Resolution on Harmony with Nature (A/RES/67/214). This resolution requests the President of the General Assembly to:</p>

                <p className='timeline-p'>1.  Host the third Interactive Dialogue of the General Assembly on Harmony with Nature to commemorate International Mother Earth Day.</p>

                <p className='timeline-p'>2.  Continue to further strengthen the Harmony with Nature website.</p>

                <p className='timeline-p'>Issue the fourth Report of the Secretary-General on Harmony with Nature as an input for the discussion on the United Nations development agenda post- 2015.</p>
                </div>

                <div className='bg-white shadow-lg p-5 mt-5 rounded-md mx-5'>
                <h1 className='month-h1'>August 17</h1>
                <p className='timeline-p'>The third Report of the Secretary-General on Harmony with Nature was published (A/67/317).</p>
                </div>

                <div className='bg-white shadow-lg p-5 mt-5 rounded-md mx-5'>
                <h1 className='month-h1'>June 20</h1>
                <p className='timeline-p'>On the occasion of the United Nations Conference on Sustainable Development, Rio+20, held in Rio de Janeiro, Brazil, this website was launched.</p>
                <p className='timeline-p'>United Nations Conference on Sustainable Development (Rio+20), outcome document 'The Future We Want', paragraph 39 on Harmony with Nature.</p>
                </div>

                <div className='bg-white shadow-lg p-5 mt-5 rounded-md mx-5'>
                <h1 className='month-h1'>April 20</h1>
                <p className='timeline-p'>The second Interactive Dialogue of the General Assembly on Harmony with Nature to commemorate International Mother Earth Day was held. The Dialogue discussed 'Scientific findings on the impacts of human activities on the functioning of the Earth System'.</p>
                </div>
            </div>
        ),
        2011: (
            <div className='2011'>
                <div className='flex justify-center mt-5'>
                    <h1 className='year-h1'>2011</h1>
                </div>
                <div className='flex grow flex-wrap justify-center'>
                <div className='bg-white shadow-lg p-5 mt-5 rounded-md mx-5'>
                <h1 className='month-h1'>December 22</h1>
                <p className='timeline-p'>The UN General Assembly, at its 66th session, adopted the third Resolution on Harmony with Nature (A/RES/66/204). This resolution requests the Secretary-General to:</p>

                <p className='timeline-p'>1.  Host the second Interactive Dialogue of the General Assembly on Harmony with Nature to commemorate International Mother Earth Day.</p>

                <p className='timeline-p'>2.  Issue the third Report of the Secretary-General on Harmony with Nature.</p>

                <p className='timeline-p'>3.  Strengthen the development of the Harmony with Nature website on time for the Rio+20 Conference.</p>
                </div>

                <div className='bg-white shadow-lg p-5 mt-5 rounded-md mx-5'>
                <h1 className='month-h1'>August 15</h1>
                <p className='timeline-p'>The second Report of the Secretary-General on Harmony with Nature (A/66/302) was published. The development of the Harmony with Nature website began.</p>
                </div>

                <div className='bg-white shadow-lg p-5 mt-5 rounded-md mx-5'>
                <h1 className='month-h1'>April 22</h1>
                <p className='timeline-p'>The first Interactive Dialogue of the General Assembly on Harmony with Nature was held to commemorate International Mother Earth Day. The Dialogue discussed ways to promote a holistic approach to sustainable development in Harmony with Nature as well and sharing national experiences on criteria and indicators to measure sustainable development in harmony with nature.</p>
                </div>
                </div>
            </div>
        ),
        2010: (
            <div className='2010 flex flex-col'>
                <div className='flex justify-center mt-5'>
                    <h1 className='year-h1'>2010</h1>
                </div>
                <div className='flex grow flex-wrap justify-center'>
                <div className='bg-white shadow-lg p-5 mt-5 rounded-md mx-5'>
                <h1 className='month-h1'>December 20</h1>
                <p className='timeline-p'>The UN General Assembly, at its 65th session, adopted the second Resolution on Harmony with Nature (A/RES/65/164). This resolution requests the Secretary-General to:</p>

                <p className='timeline-p'>1.  Host the first Interactive Dialogue of the General Assembly to commemorate International Mother Earth Day.</p>

                <p className='timeline-p'>2.  Issue a second Report of the Secretary-General on Harmony with Nature.</p>

                <p className='timeline-p'>3.  Start developing the Harmony with Nature website.</p>
                </div>

                <div className='bg-white shadow-lg p-5 mt-5 rounded-md mx-5 w-full md:w-[40%]'>
                <h1 className='month-h1'>August 19</h1>
                <p className='timeline-p'>The first Report of the Secretary-General on Harmony with Nature was published (A/65/314).</p>
                </div>

                <div className='bg-white shadow-lg p-5 mt-5 rounded-md mx-5 w-full md:w-[40%]'>
                <h1 className='month-h1'>April 22</h1>
                <p className='timeline-p'>The UN General Assembly, at its 64th session, commemorated International Mother Earth Day. A special meeting of the General Assembly was held at this occasion (A/64/PV.84).</p>
                </div>
                </div>
            </div>
        ),
        2009: (
            <div className='2009'>
                <div className='flex justify-center mt-5 border-b-[1px] border-[#e7e6e9]'>
                    <h1 className='year-h1'>2009</h1>
                </div>
                <div className='bg-white shadow-lg p-5 mt-5 rounded-md mx-5'>
                <h1 className='month-h1'>December 21</h1> 
                <p className='timeline-p'>The first UN General Assembly Resolution on Harmony with Nature (A/RES/64/196) was adopted. This resolution requests the Secretary-General to issue a first Report of the Secretary-General on Harmony with Nature.</p>
                </div>

                <div className='bg-white shadow-lg p-5 mt-5 rounded-md mx-5'>
                <h1 className='month-h1'>April 22</h1>
                <p className='timeline-p'>The UN General Assembly, at its 63rd session, proclaimed 22 April 'International Mother Earth Day'(A/RES/63/278).</p>

                <p className='timeline-p'>Mr. Evo Morales Ayma, President of the Plurinational State of Bolivia, delivered a statement at the General Assembly on the declaration of International Mother Earth Day (A/63/PV.80).</p>
                </div>
            </div>
        ),
    }

    return (
        <div className='bg-white'>
            <div className='mt-20 md:mt-[96px] mb-[96px] md:pt-20 w-[90%] mx-auto'>
                <h1 className='text-gray-400 mt-10 text-6xl font-bold border-l-[6px] pl-8 border-[#2d664c]'>Timeline</h1>
            </div>
            <div className='bg-[#FAF9F6] flex flex-row w-full md:w-[90%] h-full mx-auto my-5 border-[1px] border-[#e7e6e9] rounded-md'>
                <div className='flex flex-col w-1/4 h-1/2'>
                    <div className='flex justify-center pt-[26px] border-r-[1px] border-[#e7e6e9]'>
                        <h1 className='text-2xl md:text-5xl font-light pb-2 mb-[27px]'>Year</h1>
                    </div>
                    <div className='flex flex-col bg-[#FAF9F6] border-r-[1px] border-t-[1px] border-[#e7e6e9] font-semibold py-5'>
                        {Object.keys(events).map((year) => (
                            <button
                                key={year}
                                className='my-2 hover:bg-[#d0cfd3] py-5'
                                onClick={() => handleTimeline(year)} // Pass the selected year to the function
                            >
                                {year}
                            </button>
                        ))}
                    </div>
                </div>
                <div className='flex flex-col w-full mx-auto'>
                    {toggleTime && events[toggleTime as number] ? (
                        <div>{events[toggleTime as number]}</div> // Render events for the selected year
                    ) : (
                        <div>Please select a year to see the timeline details.</div> // Fallback message
                    )}
                </div>
            </div>
        </div>
    )
}

export default Timeline;
