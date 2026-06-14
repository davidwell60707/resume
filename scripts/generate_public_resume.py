from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import (
    KeepTogether,
    PageBreak,
    Paragraph,
    SimpleDocTemplate,
    Spacer,
    Table,
    TableStyle,
)


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "public" / "david-wei-resume-public.pdf"

NAVY = colors.HexColor("#071217")
TEAL = colors.HexColor("#17766E")
LIGHT_TEAL = colors.HexColor("#DCEFEB")
INK = colors.HexColor("#17252A")
MUTED = colors.HexColor("#52666C")
LINE = colors.HexColor("#C8D8D7")
PAPER = colors.HexColor("#F7F6F1")


def register_fonts() -> None:
    pdfmetrics.registerFont(TTFont("JhengHei", r"C:\Windows\Fonts\msjh.ttc"))
    pdfmetrics.registerFont(TTFont("JhengHeiBold", r"C:\Windows\Fonts\msjhbd.ttc"))


def page_decor(canvas, doc) -> None:
    width, height = A4
    canvas.saveState()
    canvas.setFillColor(PAPER)
    canvas.rect(0, 0, width, height, fill=1, stroke=0)
    canvas.setStrokeColor(LINE)
    canvas.setLineWidth(0.5)
    canvas.line(18 * mm, height - 16 * mm, width - 18 * mm, height - 16 * mm)
    canvas.setFont("JhengHei", 7.5)
    canvas.setFillColor(MUTED)
    canvas.drawString(18 * mm, height - 12 * mm, "DAVID WEI · PUBLIC RESUME")
    canvas.drawRightString(width - 18 * mm, height - 12 * mm, str(doc.page))
    canvas.restoreState()


def build_resume() -> None:
    register_fonts()
    styles = getSampleStyleSheet()

    title = ParagraphStyle(
        "Title",
        parent=styles["Normal"],
        fontName="JhengHeiBold",
        fontSize=25,
        leading=30,
        textColor=NAVY,
        spaceAfter=3,
    )
    subtitle = ParagraphStyle(
        "Subtitle",
        parent=styles["Normal"],
        fontName="JhengHei",
        fontSize=10.5,
        leading=15,
        textColor=TEAL,
        spaceAfter=8,
    )
    lead = ParagraphStyle(
        "Lead",
        parent=styles["Normal"],
        fontName="JhengHei",
        fontSize=10.2,
        leading=15,
        textColor=INK,
        spaceAfter=8,
    )
    body = ParagraphStyle(
        "Body",
        parent=styles["Normal"],
        fontName="JhengHei",
        fontSize=8.4,
        leading=12.5,
        textColor=INK,
        spaceAfter=3,
    )
    small = ParagraphStyle(
        "Small",
        parent=body,
        fontSize=7.5,
        leading=10.5,
        textColor=MUTED,
    )
    heading = ParagraphStyle(
        "Heading",
        parent=styles["Normal"],
        fontName="JhengHeiBold",
        fontSize=12.5,
        leading=16,
        textColor=TEAL,
        spaceBefore=7,
        spaceAfter=5,
        borderColor=LINE,
        borderBottomWidth=0.7,
        borderPadding=(0, 0, 3, 0),
    )
    item_title = ParagraphStyle(
        "ItemTitle",
        parent=body,
        fontName="JhengHeiBold",
        fontSize=9.4,
        leading=13,
        textColor=NAVY,
        spaceAfter=1,
    )
    meta = ParagraphStyle(
        "Meta",
        parent=small,
        textColor=TEAL,
        spaceAfter=2,
    )
    bullet = ParagraphStyle(
        "Bullet",
        parent=body,
        leftIndent=4 * mm,
        firstLineIndent=-2.6 * mm,
        bulletIndent=0,
        spaceAfter=2,
    )
    label = ParagraphStyle(
        "Label",
        parent=small,
        fontName="JhengHeiBold",
        textColor=TEAL,
    )

    doc = SimpleDocTemplate(
        str(OUTPUT),
        pagesize=A4,
        rightMargin=18 * mm,
        leftMargin=18 * mm,
        topMargin=21 * mm,
        bottomMargin=16 * mm,
        title="魏大為 David Wei - Public Resume",
        author="David Wei",
        subject="Senior Java Backend Engineer / System Analyst",
    )

    story = [
        Paragraph("魏大為 <font name='JhengHei'>David Wei</font>", title),
        Paragraph("Senior Java Backend Engineer / System Analyst", subtitle),
        Paragraph("台北／新北 · davidwell60707@gmail.com", small),
        Spacer(1, 5),
        Paragraph(
            "近九年企業系統開發與系統分析經驗，橫跨金融、保險、電商與平台服務。"
            "能從需求訪談、SA／SD 設計一路落地至 Java 後端、雲端部署、資安檢測與維運，"
            "擅長把複雜流程整理成可維護、可追蹤且能持續演進的解決方案。",
            lead,
        ),
        Paragraph("核心價值", heading),
    ]

    values = [
        ("端到端交付", "串接需求、分析、設計、開發、測試、部署與維運，降低跨角色溝通成本。"),
        ("Java 與 API", "以 Java、Spring Boot 建置企業後端服務與 RESTful API，重視可靠性與可維護性。"),
        ("雲端與 DevOps", "具 AWS、Docker、Kubernetes、Jenkins、ArgoCD 的實務交付與問題排查經驗。"),
        ("品質與資安", "熟悉程式碼掃描、弱點修補、日誌追蹤、效能測試與正式環境問題分析。"),
    ]
    value_table = Table(
        [[Paragraph(name, label), Paragraph(detail, small)] for name, detail in values],
        colWidths=[31 * mm, 127 * mm],
    )
    value_table.setStyle(
        TableStyle(
            [
                ("BACKGROUND", (0, 0), (0, -1), LIGHT_TEAL),
                ("BOX", (0, 0), (-1, -1), 0.5, LINE),
                ("INNERGRID", (0, 0), (-1, -1), 0.35, LINE),
                ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
                ("LEFTPADDING", (0, 0), (-1, -1), 7),
                ("RIGHTPADDING", (0, 0), (-1, -1), 7),
                ("TOPPADDING", (0, 0), (-1, -1), 6),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 6),
            ]
        )
    )
    story.extend([value_table, Paragraph("代表專案", heading)])

    projects = [
        (
            "金融風險與交易支援平台",
            "2025 至今 · SA / SD / Full-Stack / DevOps Support",
            [
                "負責企業流程需求分析、系統設計與跨團隊協作，涵蓋前後端、資料庫與部署環境。",
                "協助 CI/CD、資安掃描、SDK 與環境問題排查，提升交付穩定性。",
            ],
            "Java · Spring Boot · PostgreSQL · AWS · Kubernetes · Jenkins · ArgoCD",
        ),
        (
            "保險核心與通路整合",
            "2023–2025 · Full-Stack Engineer / API Developer",
            [
                "以 Angular、RxJS、PrimeNG 建置操作介面，並串接 Spring Boot RESTful API。",
                "使用 Oracle DB、JPA、MyBatis 處理資料流程，並支援 Jaspersoft 報表。",
            ],
            "Java · Spring Boot · Angular · TypeScript · Oracle DB · MyBatis · Jaspersoft",
        ),
        (
            "銀行交易與行動服務",
            "2018–2020 · SA / SD / PG",
            [
                "參與網銀、行動金融與交易服務系統之分析、設計、開發與問題追蹤。",
                "處理交易流程、Stored Procedure、應用伺服器與正式環境議題。",
            ],
            "Java · Spring · Angular · MSSQL · Stored Procedure · JBoss · WebLogic",
        ),
    ]
    for project_title, project_meta, bullets, technology in projects:
        block = [Paragraph(project_title, item_title), Paragraph(project_meta, meta)]
        block.extend(Paragraph(f"• {item}", bullet) for item in bullets)
        block.append(Paragraph(technology, small))
        story.append(KeepTogether(block))

    story.extend([PageBreak(), Paragraph("專業經歷", heading)])
    experience = [
        ("2025.07–至今", "資深軟體工程師／系統分析師", "企業軟體服務公司", "負責金融風險相關平台之需求分析、系統設計、前後端開發、CI/CD、資安掃描與環境問題排查。"),
        ("2023.08–2025.07", "資深軟體工程師／系統分析師", "資訊服務與顧問公司", "參與保險核心與通路整合專案，負責前後端開發、API、資料流程、報表與跨團隊協作。"),
        ("2021.01–2023.07", "軟體工程師／專案技術角色", "電子商務公司", "參與 B2B 平台與服務流程建置，處理系統整合、例外追蹤與正式環境問題。"),
        ("2020.06–2021.01", "軟體工程師／Internet 系統開發", "金融科技公司", "支援網路服務與後端系統開發，並處理服務穩定性與問題排查。"),
        ("2018.04–2020.06", "資深軟體工程師", "Atos 台灣源訊", "參與銀行交易與數位金融系統，涵蓋系統分析、程式開發與資料庫流程。"),
        ("2017.05–2017.12", "系統工程師", "軟體服務公司", "負責應用系統維運、Linux 環境與問題追蹤。"),
        ("2015.04–2016.06", "後端軟體工程師", "群傳媒股份有限公司（Readmoo）", "參與電子書平台後端功能、API 與服務流程開發。"),
    ]
    for period, position, company, summary in experience:
        experience_table = Table(
            [
                [Paragraph(period, meta), Paragraph(f"{position}<br/><font name='JhengHei'>{company}</font>", item_title)],
                ["", Paragraph(summary, body)],
            ],
            colWidths=[35 * mm, 123 * mm],
        )
        experience_table.setStyle(
            TableStyle(
                [
                    ("VALIGN", (0, 0), (-1, -1), "TOP"),
                    ("LINEBELOW", (0, -1), (-1, -1), 0.35, LINE),
                    ("TOPPADDING", (0, 0), (-1, 0), 4),
                    ("BOTTOMPADDING", (0, -1), (-1, -1), 5),
                ]
            )
        )
        story.append(experience_table)

    story.append(Paragraph("技術能力", heading))
    skills = [
        ("Backend", "Java、Spring Boot、Spring Framework、RESTful API、JPA、MyBatis、Hibernate、Apache Camel"),
        ("System Analysis", "需求訪談、系統分析、SA／SD 設計、跨系統整合、問題拆解與技術溝通"),
        ("Frontend & Data", "Angular、TypeScript、RxJS、PrimeNG、PostgreSQL、Oracle DB、MSSQL、MySQL"),
        ("Cloud & DevOps", "AWS、Docker、Kubernetes、Rancher、Jenkins、ArgoCD、Nginx、TLS"),
        ("Security & Operations", "Checkmarx、WhiteSource、資安掃描、弱點修補、Logging、Monitoring、Wireshark、JMeter"),
    ]
    skill_table = Table(
        [[Paragraph(name, label), Paragraph(items, small)] for name, items in skills],
        colWidths=[39 * mm, 119 * mm],
    )
    skill_table.setStyle(
        TableStyle(
            [
                ("BOX", (0, 0), (-1, -1), 0.5, LINE),
                ("INNERGRID", (0, 0), (-1, -1), 0.35, LINE),
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("LEFTPADDING", (0, 0), (-1, -1), 7),
                ("RIGHTPADDING", (0, 0), (-1, -1), 7),
                ("TOPPADDING", (0, 0), (-1, -1), 5),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 5),
            ]
        )
    )
    story.extend(
        [
            skill_table,
            Paragraph("學歷與證照", heading),
            Paragraph("<b>東吳大學 資訊管理學系</b> · 2009–2014", body),
            Paragraph("<b>Oracle Certified Professional, Java SE 6 Programmer</b>", body),
            Paragraph("職涯聚焦：Java 後端、企業系統分析、System Integration、Cloud Delivery 與 Solution Architecture。", body),
        ]
    )

    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    doc.build(story, onFirstPage=page_decor, onLaterPages=page_decor)


if __name__ == "__main__":
    build_resume()
    print(OUTPUT)
