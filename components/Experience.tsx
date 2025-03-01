import React from "react";
import Image from "next/image";

import { workExperience } from "../data/index";
import { BsPersonWorkspace } from "react-icons/bs";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import GlowCard from "./ui/GlowCard";
import { companyImage } from "./ui/CompanyImage";

const Experience = () => {
  return (
    <div className="py-20 w-full" id="experience">
      <h1 className="heading">
        My <span className="text-purple">work experience</span>
      </h1>

      <VerticalTimeline animate={true}>
        {workExperience?.length > 0 &&
          workExperience?.map((item, index) => {
            return (
              <VerticalTimelineElement
                key={index}
                className="vertical-timeline-element--work"
                contentStyle={{
                  padding: 0,
                  boxShadow: "none",
                  background: "none",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid rgb(139, 92, 246)",
                }}
                date={item?.duration}
                iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                icon={
                  <Image
                    src={companyImage(item?.logo)?.src || ""}
                    alt="IIITians Network"
                    style={{
                      borderRadius: "50%",
                    }}
                    width={100}
                    height={100}
                    className="rounded-full"
                  />
                }
                visible
              >
                <GlowCard key={index} identifier={`experience-${item?.id}`}>
                  <div className="p-3 relative text-white">
                    <div className="flex justify-center">
                      <p className="text-xs sm:text-sm text-green">
                        {item?.duration}
                      </p>
                    </div>
                    <div className="flex items-center gap-x-8 px-3 py-5">
                      <div className="hidden lg:block text-violet-500  transition-all duration-300 hover:scale-125">
                        <BsPersonWorkspace size={36} />
                      </div>
                      <div>
                        <div className="text-base sm:text-xl mb-2 font-medium uppercase">
                          {item?.title}
                        </div>
                        <div
                          className="text-sm sm:text-base"
                          dangerouslySetInnerHTML={{
                            __html: item?.desc,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </GlowCard>
              </VerticalTimelineElement>
            );
          })}
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
