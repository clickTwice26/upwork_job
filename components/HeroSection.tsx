'use client';

import { BookOpen, GraduationCap, Sparkles } from 'lucide-react';
import { Raleway } from 'fontsource-raleway';

export default function HeroSection() {
  return (
    <div style={{ fontFamily: 'Raleway, sans-serif' }} className="relative min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-neutral-200 px-6 lg:px-12 py-4">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 12L20 4L32 12V28L20 36L8 28V12Z" fill="#1565D8"/>
              <path d="M14 16L20 12L26 16V24L20 28L14 24V16Z" fill="#FF8C42"/>
            </svg>
            <div className="text-[28px] font-bold leading-none">
              <span className="text-[#1565D8]">Skye</span>
              <span className="text-[#FF8C42]">Ed</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden lg:flex items-center gap-8 text-[14px] font-semibold">
            <a href="#" className="text-[#FF8C42] hover:text-[#FF8C42] transition-colors">
              DASHBOARD
            </a>
            <div className="relative group">
              <button className="text-[#1565D8] hover:text-[#0D47A1] transition-colors flex items-center gap-1">
                AP COURSES
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            <div className="relative group">
              <button className="text-[#1565D8] hover:text-[#0D47A1] transition-colors flex items-center gap-1">
                AI TOOLS
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            <a href="#" className="text-[#1565D8] hover:text-[#0D47A1] transition-colors">
              LEARNING
            </a>
            <a href="#" className="text-[#1565D8] hover:text-[#0D47A1] transition-colors">
              PRICING
            </a>
            <div className="relative group">
              <button className="text-[#1565D8] hover:text-[#0D47A1] transition-colors flex items-center gap-1">
                MORE
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Side - Language & Login */}
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 text-[#1565D8] hover:text-[#0D47A1] transition-colors text-sm font-semibold">
              <span className="text-xl">🇺🇸</span>
              <span>EN</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <button className="bg-[#1565D8] text-white px-7 py-2.5 rounded-lg font-bold text-sm hover:bg-[#0D47A1] transition-colors flex items-center gap-2">
              LOG IN
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section with Background Image */}
      <div className="relative">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-cover bg-center" style={{
            backgroundImage: 'url(/image.png)',
          }} />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 pt-32 pb-20 px-6 lg:px-12">
          <div className="max-w-[1400px] mx-auto text-center">
            <h1 className="text-[52px] lg:text-[64px] leading-[1.15] font-bold mb-6 text-white drop-shadow-lg">
              Step Into
              <br />
              <span className="text-[#FF8C42]">Your AP Greatness</span>
            </h1>
            
            <p className="text-white text-[16px] leading-relaxed mb-10 max-w-[680px] mx-auto font-normal drop-shadow-md">
              Master any AP exam with our structured 32-session curriculum. Choose Skye Pilot AI, Skye Mentor live tutoring, or combine both for unstoppable results.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              <button className="bg-[#1565D8] text-white px-8 py-3.5 rounded-md font-bold text-[14px] hover:bg-[#0D47A1] transition-all shadow-lg hover:shadow-xl flex items-center gap-2 uppercase tracking-wide">
                <BookOpen className="w-5 h-5" />
                BROWSE AP COURSES
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-3.5 rounded-md font-bold text-[14px] hover:bg-white hover:text-neutral-800 transition-all shadow-lg hover:shadow-xl flex items-center gap-2 uppercase tracking-wide">
                VIEW PLANS
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Cards - Overlapping Hero */}
      <div className="relative z-20 -mt-24 px-6 lg:px-12 pb-20">
        <div className="max-w-[1100px] mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl px-12 py-10">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8">
              {/* 16+ AP Courses */}
              <div className="text-center">
                <div className="bg-[#FFF3E0] rounded-2xl px-6 py-5 mb-3 inline-block">
                  <div className="text-[#FF8C42] text-[48px] font-bold leading-none" style={{fontFamily: 'Nexa, sans-serif'}}>16+</div>
                </div>
                <div className="text-neutral-600 text-[12px] font-bold uppercase tracking-wider">AP COURSES</div>
              </div>

              {/* 4.2 Score Gain */}
              <div className="text-center">
                <div className="bg-[#FFF3E0] rounded-2xl px-6 py-5 mb-3 inline-block">
                  <div className="text-[#FF8C42] text-[48px] font-bold leading-none" style={{fontFamily: 'Nexa, sans-serif'}}>4.2</div>
                </div>
                <div className="text-neutral-600 text-[12px] font-bold uppercase tracking-wider">SCORE GAIN</div>
              </div>

              {/* IVY LEAGUE */}
              <div className="text-center">
                <div className="bg-[#1565D8] rounded-2xl px-6 py-5 mb-3 inline-block">
                  <GraduationCap className="w-14 h-14 text-white mx-auto" strokeWidth={2} />
                </div>
                <div className="text-neutral-600 text-[12px] font-bold uppercase tracking-wider">IVY LEAGUE</div>
              </div>

              {/* 100 Tutors */}
              <div className="text-center">
                <div className="bg-[#FFF3E0] rounded-2xl px-6 py-5 mb-3 inline-block">
                  <div className="text-[#FF8C42] text-[48px] font-bold leading-none" style={{fontFamily: 'Nexa, sans-serif'}}>100</div>
                </div>
                <div className="text-neutral-600 text-[12px] font-bold uppercase tracking-wider">TUTORS</div>
              </div>

              {/* AI + HUMAN */}
              <div className="text-center">
                <div className="bg-[#FFF3E0] rounded-2xl px-6 py-5 mb-3 inline-block">
                  <Sparkles className="w-14 h-14 text-[#FF8C42] mx-auto" strokeWidth={2} />
                </div>
                <div className="text-neutral-600 text-[12px] font-bold uppercase tracking-wider">AI + HUMAN</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
