import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenAI } from '@google/genai';

const SYSTEM_PROMPT = `
You are "Ramax" (راماکس), the official AI technical assistant and mascot for DRAWOLT Industrial Tools (ابزارآلات صنعتی و قدرتی دراوولت).
Brand details:
- Name: DRAWOLT (دراوولت) - NOT Drawbolt or Drabolt.
- Specialization: Heavy-duty cordless and electric industrial tools, engineered to German DIN standards.
- Flagship products:
  1) DW-9820-PRO: 20V Brushless Impact Wrench with 980 N.m peak torque, 1/2" anvil, tri-LED halo ring, nut-buster auto-stop sensor.
  2) DW-4025-AG: 40V Max 125mm Variable Speed Brushless Angle Grinder (3,000-10,000 RPM, Kickback Stop clutch, tool-free nut).
  3) DW-7740-XR: 20V SDS-Plus Brushless Heavy Rotary Hammer with 3.2 Joules true impact energy, dual-AVS anti-vibration.
  4) DW-6500-CD: 20V Brushless Combi Hammer Drill with 110 N.m torque and 13mm all-metal Rohm ratcheting chuck.
  5) DW-360-3D: 3D 12-Line Green Laser Level with German Osram diodes and 50m range (IP54).
  6) DW-8850-CS: 40V 185mm Circular Saw with 65mm cutting depth and magnesium shoe.
  7) DW-2080-BAT: 20V 8.0Ah Extreme Density Battery Pack with 21700 Tesla-grade cells and CoolPack housing.
  8) DW-QC400: Turbo Dual-Port Fast Smart Charger with 8A active cooling.
- 18-Month Golden Warranty: 18 months unconditional replacement warranty covering armature, stator, ESC board, and mechanical gears.
- Battery Ecosystem: DRA-Power universal platform (2.0Ah, 4.0Ah, 6.0Ah, 8.0Ah) with 6-layer BMS protection.
- Developer: Designed and engineered by Puzzle Rayaneh Software & Programming Engineering Development Co. Ltd., Reg. No. 527591 (شرکت توسعه مهندسی نرم افزاری و برنامه نویسی پازل رایانه با مسئولیت محدود ش.ث ۵۲۷۵۹۱).

Tone: Professional, technically precise, polite, authoritative, encouraging, industrial-focused.
Language: Answer in the same language as the user's message (Persian, English, Arabic, German). If Persian, use beautiful technical Persian terminology.
Keep answers concise, direct, and actionable (under 120 words unless deeply technical details are asked).
`;

export async function POST(req: NextRequest) {
  try {
    const { message, lang } = await req.json();

    if (!message || typeof message !== 'string') {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY;

    if (apiKey) {
      try {
        const ai = new GoogleGenAI({ apiKey });
        const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash',
          contents: [
            {
              role: 'user',
              parts: [{ text: `${SYSTEM_PROMPT}\nUser Language: ${lang || 'fa'}\nUser Question: ${message}` }],
            },
          ],
        });

        const reply = response.text || 'پاسخ فنی در حال حاضر در دسترس نیست.';
        return NextResponse.json({ reply });
      } catch (geminiError: any) {
        console.error('Gemini API call failed, using intelligent fallback:', geminiError?.message);
      }
    }

    // High-quality local expert fallback response if API key is not configured or offline
    const q = message.toLowerCase();
    let reply = '';

    if (q.includes('بکس') || q.includes('wrench') || q.includes('torque') || q.includes('گشتاور') || q.includes('9820')) {
      reply =
        lang === 'en'
          ? 'The flagship DRAWOLT DW-9820-PRO delivers an industry-leading 980 N.m of torque with a 32-pole brushless motor, 1/2" Cr-Mo anvil, and intelligent Nut-Buster auto-stop protection for heavy structural steel bolts up to M30.'
          : 'قوی‌ترین آچار بکس شارژی دراوولت مدل پرچمدار DW-9820-PRO با گشتاور بی‌رقیب ۹۸۰ نیوتن‌متر است. این دستگاه دارای موتور براشلس ۳۲ قطبی، سندان فولاد کروم-مولیبدن ۱/۲ اینچ، حلقه ۳ تایی LED هالو و سنسور توقف خودکار هنگام باز شدن مهره جهت کار در ارتفاع است.';
    } else if (q.includes('گارانتی') || q.includes('warranty') || q.includes('ضمان')) {
      reply =
        lang === 'en'
          ? 'DRAWOLT tools come with an unconditional 18-Month Golden Replacement Warranty. It covers complete free replacement of armatures, stators, digital ESC boards, and mechanical planetary gearboxes across all nationwide authorized service centers.'
          : 'کلیه ابزارآلات دراوولت دارای ۱۸ ماه گارانتی طلایی تعویض بی‌قید و شرط قطعات اصلی هستند. این گارانتی شامل تعویض رایگان آرمیچر، بالشتک، برد هوشمند ESC و گیربکس در سراسر شبکه نمایندگی‌های کشور بدون معطلی می‌باشد.';
    } else if (q.includes('براشلس') || q.includes('brushless') || q.includes('موتور')) {
      reply =
        lang === 'en'
          ? 'DRAWOLT Core-Drive brushless motors achieve 92%+ energy efficiency with zero spark, zero carbon brush wear, and produce 3x longer motor lifespan with superior heat dissipation via die-cast aluminum housings.'
          : 'موتورهای براشلس Core-Drive دراوولت دارای راندمان ۹۲٪ هستند. عدم استفاده از ذغال باعث حذف کامل جرقه‌زنی، فرسایش کلکتور و اتلاف حرارتی شده و طول عمر دستگاه را تا ۳ برابر در شیفت‌های ممتد کاری افزایش می‌دهد.';
    } else if (q.includes('باتری') || q.includes('battery') || q.includes('بطارية')) {
      reply =
        lang === 'en'
          ? 'The unified DRA-Power battery platform utilizes Tesla-grade 21700 cylindrical cells (available in 2.0Ah, 4.0Ah, 6.0Ah, and 8.0Ah). The 8.0Ah pack delivers continuous 90A discharge for up to 260 cuts in 16mm ribbed steel rebar.'
          : 'اکوسیستم باتری‌های پلتفرم DRA-Power از سلول‌های نسل ۲۱۷۰۰ با دانسیته انرژی فوق‌العاده و سیستم حفاظتی ۶ لایه BMS بهره می‌برند. به عنوان مثال، باتری ۸.۰ آمپرساعت توانایی برش ۲۶۰ قطعه میلگرد آجدار ۱۶ میلی‌متر با یک بار شارژ کامل را داراست.';
    } else {
      reply =
        lang === 'en'
          ? 'I am Ramax, your DRAWOLT technical specialist. You can ask me about torque specs, battery compatibility, brushless motor advantages, or warranty verification anytime!'
          : 'من راماکس هستم، دستیار هوش مصنوعی ابزارآلات صنعتی دراوولت. می‌توانید در مورد مشخصات فنی، گشتاور آچار بکس ۹۸۰ نیوتن‌متر، تست باتری‌های ۲ تا ۸ آمپر یا گارانتی طلایی ۱۸ ماهه هر سوالی دارید بپرسید!';
    }

    return NextResponse.json({ reply });
  } catch (error: any) {
    console.error('Ramax route error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
