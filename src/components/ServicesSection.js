import React from "react"

const faydalar = [
	{
		title: "Teknik Bilgi Sağlar",
		desc: "Mahkemeye veya taraflara, dava konusu teknik veya bilimsel konularda açıklık getirir.",
		icon: (
			<svg
				className="w-8 h-8 mx-auto mb-2 text-[#e57373]"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
				/>
			</svg>
		),
	},
	{
		title: "Delil Niteliği",
		desc: "Taraflarca sunulan uzman görüşleri, mahkemede delil olarak değerlendirilebilir.",
		icon: (
			<svg
				className="w-8 h-8 mx-auto mb-2 text-[#e57373]"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
				/>
			</svg>
		),
	},
	{
		title: "Dava Sürecini Hızlandırır",
		desc: "Teknik konularda hızlı ve güvenilir bilgi sunarak sürecin daha etkin ilerlemesini sağlar.",
		icon: (
			<svg
				className="w-8 h-8 mx-auto mb-2 text-[#e57373]"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
				/>
			</svg>
		),
	},
	{
		title: "Objektif ve Bilimsel Yaklaşım",
		desc: "Alanında uzman kişiler tarafından hazırlandığı için tarafsız ve bilimsel bir değerlendirme sunar.",
		icon: (
			<svg className="w-8 h-8 mx-auto mb-2 text-[#e57373]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 64 64">
				<ellipse cx="32" cy="32" rx="24" ry="10" />
				<ellipse cx="32" cy="32" rx="10" ry="24" />
				<ellipse cx="32" cy="32" rx="20" ry="8" transform="rotate(45 32 32)" />
				<ellipse cx="32" cy="32" rx="20" ry="8" transform="rotate(-45 32 32)" />
				<circle cx="32" cy="32" r="6" fill="none" />
			</svg>
		),
	},
	{
		title: "Bilirkişi Raporuna Alternatif",
		desc: "Mahkeme dışında da teknik görüş ihtiyacını karşılar, bilirkişi raporuna ek olarak kullanılabilir.",
		icon: (
			// Artı simgesi
			<svg
				className="w-8 h-8 mx-auto mb-2 text-[#e57373]"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
			>
				<line x1="12" y1="5" x2="12" y2="19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
				<line x1="5" y1="12" x2="19" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
			</svg>
		),
	},
]

const ServicesSection = () => {
	return (
		<section className="bg-[#232323] text-[#4ecb8f]">
			<div className="container mx-auto px-4 py-8">
				<div className="flex flex-col md:flex-row gap-0 max-w-6xl mx-auto">
					{/* 1. Parça */}
					<div className="flex-1 flex flex-col justify-center items-center px-6 py-8 bg-white bg-opacity-20 rounded-lg m-2 text-center">
						<h3 className="text-lg font-semibold text-[#f87171] mb-3">
							Uzman Görüşü Nedir?
						</h3>
						<p className="text-sm">
							Uzman görüşü, teknik veya özel bilgi gerektiren konularda mahkemeler,
							savcılıklar veya taraflarca alınan, alanında uzman kişiler tarafından
							hazırlanan bilimsel ve objektif değerlendirme raporudur.
						</p>
					</div>
					{/* 2. Parça */}
					<div className="flex-1 flex flex-col justify-center items-center px-6 py-8 bg-white bg-opacity-20 rounded-lg m-2 text-center">
						<h3 className="text-lg font-semibold text-[#f87171] mb-3">
							Türk Hukuk Sisteminde Uzman Görüşünün Yeri
						</h3>
						<p className="text-sm">
							Türk hukukunda, özellikle Hukuk Muhakemeleri Kanunu’nın 293. maddesi
							uyarınca, taraflar dava sürecinde kendi seçtikleri uzmanlardan görüş
							alabilir ve bu görüşleri mahkemeye sunabilirler. Uzman görüşü,
							bilirkişi raporundan farklı olarak tarafların delil olarak sunduğu,
							teknik ve bilimsel açıklamalar içeren bir değerlendirmedir. Mahkemeler,
							uzman görüşünü dikkate almak zorunda olmamakla birlikte, kararlarını
							gerekçelendirirken bu görüşlerden yararlanabilirler.
						</p>
					</div>
					{/* 3. Parça */}
					<div className="flex-1 flex flex-col justify-center items-center px-6 py-8 bg-white bg-opacity-20 rounded-lg m-2 text-center">
						<h3 className="text-lg font-semibold text-[#f87171] mb-4">
							Uzman Görüşünün Faydaları Nelerdir?
						</h3>
						<div className="flex flex-col gap-3 w-full">
							{faydalar.map((fayda, i) => (
								<div
									key={i}
									className="flex items-center gap-3 rounded p-2 w-full"
								>
									<div>{fayda.icon}</div>
									<div className="text-left">
										<div className="font-semibold text-sm text-[#f87171]">
											{fayda.title}
										</div>
										<div className="text-xs ">
											{fayda.desc}
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
				{/* CTA */}
				<div className="text-center mt-8">
					<h4 className="text-base font-semibold text-[#4ecb8f] mb-3">
						Siz de uzman görüşü almak veya detaylı bilgi edinmek için bizimle
						iletişime geçebilirsiniz.
					</h4>
					<a
						href="/iletisim"
						className="bg-[#4ecb8f] text-[#232323] px-6 py-2 rounded-lg hover:bg-[#38b27e] transition-colors inline-block text-sm font-semibold"
					>
						İletişim Formu
					</a>
				</div>
			</div>
		</section>
	)
}

export default ServicesSection
