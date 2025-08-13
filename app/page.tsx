"use client"

import { Button } from "@/components/ui/button"
import { useEffect, useRef } from "react"

export default function Home() {
  const observerRef = useRef<IntersectionObserver | null>(null)

  // PASTE YOUR CREATOR IMAGE URLS HERE (15 images)
  const creatorImages = [
    "https://i2.seadn.io/ethereum/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/d0b0fe69a00b986416ee20c3b41156/22d0b0fe69a00b986416ee20c3b41156.png?w=350",
    "https://i2.seadn.io/ethereum/0x60e4d786628fea6478f785a6d7e704777c86a7c6/4474b415e5048646dbda1c7ca98645d1.png?w=1000", 
    "https://i2.seadn.io/base/0x8e7e3add81feb774227e79b4e4f0ff227213db7a/3c93eec6fb347856ad64d97ccf7fbb/d53c93eec6fb347856ad64d97ccf7fbb.png?w=1000",
    "https://i2.seadn.io/base/0x8e7e3add81feb774227e79b4e4f0ff227213db7a/56a6985e928d69b7dc7a463c5021c0/f656a6985e928d69b7dc7a463c5021c0.png?w=1000",
    "https://i2.seadn.io/ethereum/0x0af85e2dee602b0a14d50f4fc1096c2f7fbe60f2/1e3d52f5c3eda44064510a6118244276.jpeg?w=1000",
    "https://i2.seadn.io/base/0x286ce4278213bf7b561763ebcf2342bb94e52858/f1a20a30a665ba7746333f42ae18f69c.png?w=1000",
    "https://i2.seadn.io/ethereum/0xed5af388653567af2f388e6224dc7c4b3241c544/8f598afcd92b6abf6f230d68dd1df493.png?w=1000",
    "https://i2.seadn.io/base/0x8e7e3add81feb774227e79b4e4f0ff227213db7a/9366d917637f99ccee91001a5ad759/4f9366d917637f99ccee91001a5ad759.png?w=1000",
    "https://i2.seadn.io/base/0x95bc4c2e01c2e2d9e537e7a9fe58187e88dd8019/9a2c98bee2f48d4508c685f87222d7/b79a2c98bee2f48d4508c685f87222d7.gif?w=350",
    "https://i2.seadn.io/ethereum/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/21dbef6b65eac82fa3327bf1a69f7a/7f21dbef6b65eac82fa3327bf1a69f7a.png?w=350",
    "https://i2.seadn.io/ethereum/0xc0ffee8ff7e5497c2d6f7684859709225fcc5be8/2570b98270174c7a9ee426216ba9f4/7f2570b98270174c7a9ee426216ba9f4.png?w=350",
    "https://i2.seadn.io/ethereum/0xc0ffee8ff7e5497c2d6f7684859709225fcc5be8/6c4992acd9ea8880729727eaf30543/5e6c4992acd9ea8880729727eaf30543.png?w=350",
    "https://i2.seadn.io/ethereum/0x0af85e2dee602b0a14d50f4fc1096c2f7fbe60f2/dbd42ecd09c237322f014bc042e74620.jpeg?w=1000",
    "https://i2.seadn.io/ethereum/0x60e4d786628fea6478f785a6d7e704777c86a7c6/83abb9a97534bfc08be46857520f1018.png?w=1000",
    "https://i2.seadn.io/ethereum/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/fceb70e3d132210463909ed4cc37a9/6afceb70e3d132210463909ed4cc37a9.png?w=350"
  ]

  // PASTE YOUR BRAND IMAGE URLS HERE (15 images)
  const brandImages = [
    "https://i2.seadn.io/ethereum/0x0af85e2dee602b0a14d50f4fc1096c2f7fbe60f2/a8c02571f23c287778196b03a0842648.jpeg?w=1000",
    "https://i2.seadn.io/ethereum/0xc0ffee8ff7e5497c2d6f7684859709225fcc5be8/6c4992acd9ea8880729727eaf30543/5e6c4992acd9ea8880729727eaf30543.png?w=350",
    "https://i2.seadn.io/base/0x8e7e3add81feb774227e79b4e4f0ff227213db7a/26ac4fa03bc7c8ddac3d7d74f6e33d/9026ac4fa03bc7c8ddac3d7d74f6e33d.png?w=1000", 
    "https://i2.seadn.io/ethereum/0xd3d9ddd0cf0a5f0bfb8f7fceae075df687eaebab/3f920527ae730953e961349d6b5ea402.png?w=350",
    "https://i2.seadn.io/ethereum/0xdd012153e008346591153fff28b0dd6724f0c256/91634c272071c418ff0da96f6bcefa3a.png?w=350",
    "https://i2.seadn.io/ethereum/0xdd012153e008346591153fff28b0dd6724f0c256/c9703412e11b52e9ff2d3e3ca476c845.png?w=350",
    "https://i2.seadn.io/ethereum/0x9ef31ce8cca614e7aff3c1b883740e8d2728fe91/d4a6d429b7daf46d326721aec843f0/bfd4a6d429b7daf46d326721aec843f0.png?w=1000",
    "https://i2.seadn.io/ethereum/0x9ef31ce8cca614e7aff3c1b883740e8d2728fe91/e9edf9166d4e47b92c3db2abf46351/84e9edf9166d4e47b92c3db2abf46351.png?w=1000",
    "https://i2.seadn.io/ethereum/0xd3d9ddd0cf0a5f0bfb8f7fceae075df687eaebab/1647c3379374a5bb3ff9a7a81f4073c0.png?w=350",
    "https://i2.seadn.io/ethereum/0xd3d9ddd0cf0a5f0bfb8f7fceae075df687eaebab/0f5c32962230c4bca83ad53bc57801d9.png?w=350",
    "https://i2.seadn.io/ethereum/0xdd012153e008346591153fff28b0dd6724f0c256/e8517f4ddc953a39ce90585def9e528c.png?w=350",
    "https://i2.seadn.io/ethereum/0xdd012153e008346591153fff28b0dd6724f0c256/475b5baf9f46c1c30b7282bd21b6491b.png?w=350",
    "https://i2.seadn.io/ethereum/0x42069abfe407c60cf4ae4112bedead391dba1cdb/a9daf7e27828ce41b79c51420cbe0efa.png?w=350",
    "https://i2.seadn.io/ethereum/0xc3f733ca98e0dad0386979eb96fb1722a1a05e69/891b4b501dd341088923d09104b78f/da891b4b501dd341088923d09104b78f.png?w=350",
    "https://i2.seadn.io/ethereum/0x80336ad7a747236ef41f47ed2c7641828a480baa/0749500293c3e10f057447b7975251/a70749500293c3e10f057447b7975251.png?w=350"
  ]

  const miniGridImages = [
    "https://i2.seadn.io/ethereum/0x524cab2ec69124574082676e6f654a18df49a048/a8c6098b4e71cbbbbf67807cc34917/e7a8c6098b4e71cbbbbf67807cc34917.png?w=350",
    "https://i2.seadn.io/ethereum/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d/f70107ff831a5f2db01b7b2c7b1b4b/8af70107ff831a5f2db01b7b2c7b1b4b.png?w=350",
    "https://i2.seadn.io/base/0x286ce4278213bf7b561763ebcf2342bb94e52858/fe63a8179b4aee41864a8e2d325c6889.png?w=350",
    "https://i2.seadn.io/base/0x95bc4c2e01c2e2d9e537e7a9fe58187e88dd8019/51961b8fcb713c72f1443094e3858d/1f51961b8fcb713c72f1443094e3858d.gif?w=350",
    "https://i2.seadn.io/ethereum/0x5af0d9827e0c53e4799bb226655a1de152a425a5/3b5857e299c3a29c14c37ee37bc2e6aa.png?w=350",
    "https://i2.seadn.io/ethereum/0xd774557b647330c91bf44cfeab205095f7e6c367/2be5e87eda1a12ddc69fd9914e734cb9.png?w=350",
  ];
  // No background animations – static palette per section

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    )

    // Observe all elements with scroll-animate class
    const elements = document.querySelectorAll(".scroll-animate")
    elements.forEach((el) => observerRef.current?.observe(el))

    return () => {
      observerRef.current?.disconnect()
    }
  }, [])

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-50">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-neutral-950/95 backdrop-blur-sm border-b border-neutral-800">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <img src="/logo.png" alt="Frelyst Logo" className="w-8 h-8" />
              <span className="font-pixel text-white text-lg">FRELYST</span>
            </div>
            
            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="font-tech text-neutral-300 hover:text-orange-500 transition-colors">Features</a>
              <a href="#tokenomics" className="font-tech text-neutral-300 hover:text-orange-500 transition-colors">Tokenomics</a>
              <a href="#community" className="font-tech text-neutral-300 hover:text-orange-500 transition-colors">Community</a>
            </div>
            
            {/* CTA Button */}
            <Button 
              className="bg-orange-500 hover:bg-orange-600 text-black font-pixel px-6 py-2 rounded-none border-0"
              onClick={() => window.open('https://docs.frelyst.app', '_blank')}
            >
              READ DOCS
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section - increased padding */}
      {/* Section 1: Black background with orange accents */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-32 bg-neutral-950 text-neutral-50 pt-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center z-20">
          {/* Left side - Text content */}
          <div className="space-y-8 scroll-animate fade-in-left">
            {/* Logo/Title */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-pixel text-white pixel-glow glitch">FRELYST</h1>
              <div className="text-orange-500 font-tech text-xl md:text-2xl tracking-wider">$FRE TOKEN</div>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl font-pixel text-orange-500 leading-relaxed">
                CREATOR ECONOMY & NFT PLATFORM
              </h2>
              <p className="text-base md:text-lg font-tech text-white/80 leading-relaxed">
                Decentralized • Creator-Empowered • Community-Driven
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="pixel-button font-pixel text-black px-6 py-4 text-base hover:scale-105 transition-transform">
                LAUNCH APP
              </Button>
              <Button
                variant="outline"
                className="border-2 border-orange-500 text-orange-500 font-pixel px-6 py-4 text-base hover:bg-orange-500 hover:text-black transition-colors bg-transparent"
              >
                READ DOCS
              </Button>
            </div>
          </div>

          <div className="relative scroll-animate fade-in-right">
            {/* MacBook frame */}
            <div className="bg-gray-800 rounded-lg p-2 shadow-2xl">
              {/* Screen bezel */}
              <div className="bg-black rounded-md p-4">
                {/* Browser chrome */}
                <div className="flex items-center gap-2 mb-4 pb-2 border-b border-gray-700">
                  <div className="flex gap-1">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="flex-1 text-center">
                    <div className="bg-gray-700 rounded px-3 py-1 text-xs font-tech text-white/60">app.frelyst.com</div>
                  </div>
                </div>

                {/* Mini app interface */}
                <div className="space-y-3">
                  {/* Header */}
                  <div className="flex justify-between items-center">
                    <div className="text-orange-500 font-pixel text-xs">FRELYST</div>
                    <div className="bg-orange-500 text-black px-2 py-1 text-xs font-pixel">CONNECT</div>
                  </div>

                  {/* NFT Grid */}
                  <div className="grid grid-cols-3 gap-2">
                    {miniGridImages.map((src, i) => (
                      <div key={i} className="aspect-square overflow-hidden border border-orange-500/30 bg-black/50">
                        <img src={src} alt={`Mini ${i + 1}`} className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>

                  {/* Stats bar */}
                  <div className="flex justify-between text-xs font-tech text-white/60">
                    <span>1.2K Creators</span>
                    <span>5.8K NFTs</span>
                    <span>$2.1M Volume</span>
                  </div>
                </div>
              </div>

              {/* Keyboard base */}
              <div className="bg-gray-800 h-2 rounded-b-lg mx-8 -mt-1"></div>
            </div>
          </div>
        </div>

        {/* Decorative pixel elements */}
        <div className="absolute top-20 left-20 w-4 h-4 bg-orange-500 pixel-pulse" />
        <div className="absolute top-40 right-32 w-6 h-6 bg-white pixel-pulse" style={{ animationDelay: "0.5s" }} />
        <div
          className="absolute bottom-32 left-16 w-5 h-5 bg-orange-500 pixel-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div className="absolute bottom-20 right-20 w-4 h-4 bg-white pixel-pulse" style={{ animationDelay: "1.5s" }} />
      </section>

      {/* Section 2: White background */}
      <section className="py-32 px-4 relative z-20 bg-white text-neutral-900">
        <div className="max-w-4xl mx-auto text-center space-y-12 scroll-animate fade-in-up">
          <h2 className="text-4xl md:text-6xl font-pixel text-orange-700">WHAT IS FRELYST?</h2>

          <div className="space-y-8 font-tech text-lg text-neutral-700 leading-relaxed">
            <p>
              Frelyst is a revolutionary creator economy platform built on Polygon that empowers artists, brands, and
              communities to tokenize their creative work and build sustainable digital economies.
            </p>

            <p>
              Our platform combines the power of NFTs with advanced creator tools, enabling users to mint, showcase, and
              monetize their digital assets while maintaining full ownership and creative control.
            </p>

            <div className="grid md:grid-cols-3 gap-12 pt-12">
              <div className="nft-card p-8 space-y-6 scroll-animate fade-in-up" style={{ animationDelay: "0.1s" }}>
                <div
                  className="w-16 h-16 bg-orange-500 mx-auto"
                  style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
                ></div>
                <h3 className="font-pixel text-orange-500 text-lg">CREATE</h3>
                <p className="text-sm text-white/80">Turn your art into valuable NFTs with built-in royalties</p>
              </div>

              <div className="nft-card p-8 space-y-6 scroll-animate fade-in-up" style={{ animationDelay: "0.2s" }}>
                <div
                  className="w-16 h-16 bg-white mx-auto"
                  style={{ clipPath: "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)" }}
                ></div>
                <h3 className="font-pixel text-orange-500 text-lg">SHOWCASE</h3>
                <p className="text-sm text-white/80">Display your work in immersive digital galleries</p>
              </div>

              <div className="nft-card p-8 space-y-6 scroll-animate fade-in-up" style={{ animationDelay: "0.3s" }}>
                <div className="w-16 h-16 bg-orange-500 mx-auto"></div>
                <h3 className="font-pixel text-orange-500 text-lg">EARN</h3>
                <p className="text-sm text-white/80">Build sustainable income through creator rewards</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: White background with static image */}
      <section className="py-32 px-4 relative z-20 bg-white text-neutral-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-pixel text-center text-orange-600 mb-24 scroll-animate fade-in-up">
            FEATURES
          </h2>
        </div>
      </section>

      {/* Section 3: Orange-tinted light background */}
      <section className="py-24 px-4 relative z-20 bg-orange-50 text-neutral-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            <div className="space-y-6 lg:space-y-8 scroll-animate fade-in-left order-2 lg:order-1">
              <div
                className="w-16 h-16 lg:w-20 lg:h-20 bg-orange-500"
                style={{
                  clipPath: "polygon(0 0, 100% 0, 100% 75%, 75% 100%, 0 100%)",
                }}
              />
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-pixel text-orange-700 leading-tight break-words">CREATIVE TOKENIZATION</h3>
              <p className="font-tech text-neutral-700 leading-relaxed text-base lg:text-lg xl:text-xl">
                Turn artworks, brand campaigns, and personal stories into NFTs with on-chain provenance and royalties.
                Empower creators to monetize their work directly while maintaining full ownership and control over their
                creative assets.
              </p>
            </div>
            <div className="nft-card aspect-video p-6 lg:p-8 scroll-animate fade-in-right order-1 lg:order-2">
              <div className="h-full flex flex-col">
                {/* Window chrome */}
                <div className="flex items-center gap-2 mb-4 pb-2 border-b border-neutral-800">
                  <div className="flex gap-1">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="flex-1 text-center">
                    <div className="bg-neutral-800 rounded px-3 py-1 text-xs font-tech text-neutral-400">mint.frelyst.app</div>
                  </div>
                </div>
                {/* Header */}
                <div className="flex justify-between items-center mb-4">
                  <div className="font-pixel text-orange-500 text-sm">MINT NFT</div>
                  <div className="bg-orange-500 text-black px-2 py-1 text-xs font-pixel">LIVE</div>
                </div>

                {/* Upload area */}
                <div className="flex-1 border-2 border-dashed border-orange-500/50 rounded flex flex-col items-center justify-center mb-4 bg-transparent">
                  <div className="w-12 h-12 bg-orange-500/30 mb-2 flex items-center justify-center">
                    <div className="text-orange-500 font-pixel text-sm">IMG</div>
                  </div>
                  <div className="text-neutral-400 text-sm font-tech">Drop artwork here</div>
                </div>

                {/* Form fields */}
                <div className="space-y-2">
                  <div className="flex gap-2">
                    <div className="flex-1 bg-gray-800 border border-orange-500/30 px-2 py-1">
                      <div className="text-white/40 text-xs font-tech">Title: &quot;Digital Dreams #001&quot;</div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div className="flex-1 bg-gray-800 border border-orange-500/30 px-2 py-1">
                      <div className="text-white/40 text-xs font-tech">Royalty: 10%</div>
                    </div>
                    <div className="bg-orange-500 text-black px-3 py-1 text-xs font-pixel hover:bg-orange-400 cursor-pointer">
                      MINT
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: White background */}
      <section className="py-24 px-4 relative z-20 bg-white text-neutral-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            <div className="nft-card overflow-hidden h-80 p-6 lg:p-8 order-1 lg:order-1 scroll-animate fade-in-left">
              <div className="h-full flex flex-col">
                {/* Window chrome */}
                <div className="flex items-center gap-2 mb-4 pb-2 border-b border-neutral-800">
                  <div className="flex gap-1">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="flex-1 text-center">
                    <div className="bg-neutral-800 rounded px-3 py-1 text-xs font-tech text-neutral-400">hub.frelyst.app</div>
                  </div>
                </div>
                {/* Header */}
                <div className="flex justify-between items-center mb-4">
                  <div className="font-pixel text-orange-500 text-sm">CAMPAIGN HUB</div>
                  <div className="text-white/60 text-xs font-tech">Live: 3 campaigns</div>
                </div>

                {/* Campaign cards */}
                <div className="space-y-3 flex-1">
                  <div className="bg-gradient-to-r from-orange-500/20 to-transparent border-l-2 border-orange-500 p-3">
                    <div className="flex justify-between items-center">
                      <div className="text-white text-xs font-tech">Nike x Artists Collab</div>
                      <div className="text-orange-500 text-xs font-pixel">ACTIVE</div>
                    </div>
                    <div className="text-white/60 text-xs font-tech mt-1">1.2K participants • $50K volume</div>
                  </div>

                  <div className="bg-gradient-to-r from-white/10 to-transparent border-l-2 border-white/30 p-3">
                    <div className="flex justify-between items-center">
                      <div className="text-white text-xs font-tech">Adidas Future Collection</div>
                      <div className="text-white/60 text-xs font-pixel">PENDING</div>
                    </div>
                    <div className="text-white/60 text-xs font-tech mt-1">850 participants • $32K volume</div>
                  </div>

                  <div className="bg-gradient-to-r from-orange-500/10 to-transparent border-l-2 border-orange-500/50 p-3">
                    <div className="flex justify-between items-center">
                      <div className="text-white text-xs font-tech">Coca-Cola Digital Art</div>
                      <div className="text-orange-500/60 text-xs font-pixel">ENDED</div>
                    </div>
                    <div className="text-white/60 text-xs font-tech mt-1">2.1K participants • $85K volume</div>
                  </div>
                </div>

                {/* Action button */}
                <div className="mt-auto pt-4">
                  <button className="w-full bg-orange-500 text-black py-3 text-xs font-pixel text-center rounded hover:bg-orange-400">
                    CREATE CAMPAIGN
                  </button>
                </div>
              </div>
            </div>
            <div className="space-y-6 lg:space-y-8 order-2 lg:order-2 scroll-animate fade-in-right">
              <div
                className="w-16 h-16 lg:w-20 lg:h-20 bg-white"
                style={{
                  clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
                }}
              />
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-pixel text-orange-700 leading-tight break-words">BRAND AMPLIFICATION</h3>
              <p className="font-tech text-neutral-700 leading-relaxed text-base lg:text-lg xl:text-xl">
                Launch immersive multimedia campaigns and enable communities to co-create and curate content. Build
                authentic connections between brands and audiences through collaborative storytelling and shared
                creative experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Orange-tinted background */}
      <section className="py-24 px-4 relative z-20 bg-orange-50 text-neutral-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            <div className="space-y-6 lg:space-y-8 scroll-animate fade-in-left order-2 lg:order-1">
              <div
                className="w-16 h-16 lg:w-20 lg:h-20 bg-orange-500"
                style={{
                  clipPath: "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)",
                }}
              />
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-pixel text-orange-700 leading-tight break-words">FREEDOM INFRASTRUCTURE</h3>
              <p className="font-tech text-neutral-700 leading-relaxed text-base lg:text-lg xl:text-xl">
                Censorship-resistant publishing with cross-chain compatibility and creator-first economy. Built on
                decentralized protocols to ensure your content remains accessible and your creative freedom is protected
                forever.
              </p>
            </div>
            <div className="nft-card aspect-video p-6 lg:p-8 scroll-animate fade-in-right order-1 lg:order-2">
              <div className="h-full flex flex-col">
                {/* Window chrome */}
                <div className="flex items-center gap-2 mb-4 pb-2 border-b border-neutral-800">
                  <div className="flex gap-1">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="flex-1 text-center">
                    <div className="bg-neutral-800 rounded px-3 py-1 text-xs font-tech text-neutral-400">status.frelyst.app</div>
                  </div>
                </div>
                {/* Header */}
                <div className="flex justify-between items-center mb-4">
                  <div className="font-pixel text-orange-500 text-sm">NETWORK STATUS</div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <div className="text-green-500 text-xs font-tech">ONLINE</div>
                  </div>
                </div>

                {/* Network nodes visualization */}
                <div className="flex-1 relative mb-4">
                  <div className="absolute inset-0 flex items-center justify-center">
                    {/* Central node */}
                    <div className="w-8 h-8 bg-orange-500 rounded-full relative">
                      {/* Connected nodes */}
                      <div className="absolute -top-6 -left-6 w-4 h-4 bg-white rounded-full"></div>
                      <div className="absolute -top-6 -right-6 w-4 h-4 bg-white rounded-full"></div>
                      <div className="absolute -bottom-6 -left-6 w-4 h-4 bg-white rounded-full"></div>
                      <div className="absolute -bottom-6 -right-6 w-4 h-4 bg-white rounded-full"></div>
                      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-orange-300 rounded-full"></div>
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-orange-300 rounded-full"></div>

                      {/* Connection lines */}
                      <div className="absolute inset-0">
                        <svg className="w-full h-full" viewBox="-20 -20 40 40">
                          <line x1="0" y1="0" x2="-12" y2="-12" stroke="#f97316" strokeWidth="1" opacity="0.5" />
                          <line x1="0" y1="0" x2="12" y2="-12" stroke="#f97316" strokeWidth="1" opacity="0.5" />
                          <line x1="0" y1="0" x2="-12" y2="12" stroke="#f97316" strokeWidth="1" opacity="0.5" />
                          <line x1="0" y1="0" x2="12" y2="12" stroke="#f97316" strokeWidth="1" opacity="0.5" />
                          <line x1="0" y1="0" x2="0" y2="16" stroke="#fb923c" strokeWidth="1" opacity="0.5" />
                          <line x1="0" y1="0" x2="0" y2="-16" stroke="#fb923c" strokeWidth="1" opacity="0.5" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div>
                    <div className="text-orange-500 font-pixel text-xs">847</div>
                    <div className="text-white/60 text-xs font-tech">Nodes</div>
                  </div>
                  <div>
                    <div className="text-white font-pixel text-xs">99.9%</div>
                    <div className="text-white/60 text-xs font-tech">Uptime</div>
                  </div>
                  <div>
                    <div className="text-orange-500 font-pixel text-xs">5</div>
                    <div className="text-white/60 text-xs font-tech">Chains</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: White background */}
      <section className="py-32 px-4 relative z-20 bg-white text-neutral-900">
        <div className="max-w-6xl mx-auto scroll-animate fade-in-up">
          <h2 className="text-4xl md:text-6xl font-pixel text-center text-orange-700 mb-24">TOKENOMICS</h2>

          <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
            <div className="space-y-8 scroll-animate fade-in-left">
              <div className="nft-card p-8">
                <h3 className="text-2xl font-pixel text-orange-500 mb-4">$FRE TOKEN</h3>
                <div className="space-y-3 font-tech text-neutral-200">
                  <p>
                    <span className="text-orange-500">Total Supply:</span> 1,000,000,000 $FRE
                  </p>
                  <p>
                    <span className="text-orange-500">Chain:</span> Polygon (EVM)
                  </p>
                  <p>
                    <span className="text-orange-500">Model:</span> Single-token economy
                  </p>
                  <p>
                    <span className="text-orange-500">Launch Price:</span> $0.025
                  </p>
                  <p>
                    <span className="text-orange-500">Market Cap:</span> $25M (FDV)
                  </p>
                </div>
              </div>
            </div>

            <div className="relative scroll-animate fade-in-right">
              <div className="relative w-80 h-80 mx-auto">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="transparent"
                    stroke="#f97316"
                    strokeWidth="20"
                    strokeDasharray="75.4 251.3"
                    strokeDashoffset="0"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="transparent"
                    stroke="#fbbf24"
                    strokeWidth="20"
                    strokeDasharray="50.3 251.3"
                    strokeDashoffset="-75.4"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="transparent"
                    stroke="#fb923c"
                    strokeWidth="20"
                    strokeDasharray="45.2 251.3"
                    strokeDashoffset="-125.7"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="transparent"
                    stroke="#9ca3af"
                    strokeWidth="20"
                    strokeDasharray="37.7 251.3"
                    strokeDashoffset="-170.9"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="transparent"
                    stroke="#fdba74"
                    strokeWidth="20"
                    strokeDasharray="25.1 251.3"
                    strokeDashoffset="-208.6"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="transparent"
                    stroke="#d1d5db"
                    strokeWidth="20"
                    strokeDasharray="12.6 251.3"
                    strokeDashoffset="-233.7"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="transparent"
                    stroke="#6b7280"
                    strokeWidth="20"
                    strokeDasharray="5.0 251.3"
                    strokeDashoffset="-246.3"
                  />
                </svg>

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="font-pixel text-orange-500 text-lg">$FRE</div>
                     <div className="font-tech text-neutral-600 text-sm">TOKEN</div>
                  </div>
                </div>
              </div>

               <div className="grid grid-cols-2 gap-3 mt-8">
                {[
                  { label: "COMMUNITY", percent: "30%", color: "bg-orange-500", amount: "300M" },
                  { label: "ECOSYSTEM", percent: "20%", color: "bg-amber-400", amount: "200M" },
                  { label: "TEAM", percent: "18%", color: "bg-orange-400", amount: "180M" },
                  { label: "INVESTORS", percent: "15%", color: "bg-gray-400", amount: "150M" },
                  { label: "LIQUIDITY", percent: "10%", color: "bg-orange-300", amount: "100M" },
                  { label: "PUBLIC", percent: "5%", color: "bg-gray-300", amount: "50M" },
                  { label: "RESERVE", percent: "2%", color: "bg-gray-600", amount: "20M" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className={`w-3 h-3 ${item.color}`} />
                     <div className="font-tech text-xs text-neutral-700 flex-1">{item.label}</div>
                    <div className="font-pixel text-xs text-orange-500">{item.percent}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mb-24">
            <h3 className="text-3xl font-pixel text-orange-500 text-center mb-12 pixel-glow scroll-animate fade-in-up">
              TOKEN UTILITY
            </h3>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { shape: "square", title: "GOVERNANCE", desc: "Vote on platform upgrades and treasury decisions" },
                { shape: "triangle", title: "STAKING", desc: "Earn rewards and unlock premium features" },
                { shape: "trapezoid", title: "FEES", desc: "Pay platform fees and access exclusive content" },
                { shape: "pentagon", title: "REWARDS", desc: "Earn tokens for creating and curating content" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="nft-card p-8 text-center space-y-6 scroll-animate fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div
                    className={`w-16 h-16 mx-auto ${index % 2 === 0 ? "bg-orange-500" : "bg-white"}`}
                    style={
                      item.shape === "triangle"
                        ? { clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }
                        : item.shape === "trapezoid"
                          ? { clipPath: "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)" }
                          : item.shape === "pentagon"
                            ? { clipPath: "polygon(0 0, 100% 0, 100% 75%, 75% 100%, 0 100%)" }
                            : {}
                    }
                  ></div>
                  <h4 className="font-pixel text-orange-400 text-base md:text-lg">{item.title}</h4>
                  <p className="font-tech text-neutral-200 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-24">
            <h3 className="text-3xl font-pixel text-orange-500 text-center mb-12 pixel-glow scroll-animate fade-in-up">
              VESTING SCHEDULE
            </h3>
            <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white border border-orange-200 p-8 scroll-animate fade-in-left">
                <h4 className="font-pixel text-orange-500 mb-4">TEAM & ADVISORS</h4>
                 <div className="space-y-3 font-tech text-sm text-neutral-800">
                  <div className="flex justify-between">
                    <span>Cliff Period:</span>
                    <span className="text-orange-500">12 months</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Vesting Duration:</span>
                    <span className="text-orange-500">36 months</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Release Schedule:</span>
                    <span className="text-orange-500">Monthly linear</span>
                  </div>
                </div>
              </div>
            <div className="bg-white border border-orange-200 p-8 scroll-animate fade-in-right">
                <h4 className="font-pixel text-orange-500 mb-4">INVESTORS</h4>
                 <div className="space-y-3 font-tech text-sm text-neutral-800">
                  <div className="flex justify-between">
                    <span>Cliff Period:</span>
                    <span className="text-orange-500">6 months</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Vesting Duration:</span>
                    <span className="text-orange-500">24 months</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Release Schedule:</span>
                    <span className="text-orange-500">Monthly linear</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-pixel text-orange-500 text-center mb-12 pixel-glow scroll-animate fade-in-up">
              TOKEN ECONOMICS
            </h3>
            <div className="grid md:grid-cols-3 gap-12">
              {[
                { value: "2.5%", title: "Platform Fee", desc: "On all NFT transactions" },
                { value: "15%", title: "Staking APY", desc: "Base rewards for stakers" },
                { value: "50%", title: "Fee Burn", desc: "Deflationary mechanism" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="nft-card p-8 text-center scroll-animate fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-4xl font-pixel text-orange-500 mb-4">{item.value}</div>
                  <div className="font-tech text-white/80 text-sm">{item.title}</div>
                  <div className="font-tech text-white/60 text-xs mt-2">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-4 relative z-20">
        <div className="max-w-6xl mx-auto">
          <div className="mb-24 scroll-animate fade-in-up">
            <div className="aspect-[21/9] w-full max-w-5xl mx-auto nft-card overflow-hidden">
              <img 
                src="/FRELYST.png"
                alt="FRELYST"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

           <div className="grid md:grid-cols-3 gap-12 text-center">
            {[
              { value: "200M+", label: "Global Creators" },
              { value: "$250B+", label: "Creator Economy by 2030" },
              { value: "∞", label: "Creative Possibilities" },
            ].map((stat, index) => (
              <div
                key={index}
                className="space-y-6 scroll-animate fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                 <div className="text-6xl font-pixel text-orange-700">{stat.value}</div>
                 <div className="font-tech text-neutral-700 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8: Orange accent on dark background */}
      <section className="py-32 px-4 relative z-20 overflow-hidden bg-neutral-950 text-neutral-50">
        <div className="max-w-6xl mx-auto text-center space-y-16 scroll-animate fade-in-up">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-6xl font-pixel text-orange-500">JOIN THE REVOLUTION</h2>
            <p className="text-xl font-tech text-neutral-300 max-w-3xl mx-auto leading-relaxed">
              Be part of the next generation creator economy. Connect with artists, brands, and communities building the
              future of digital ownership.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <Button className="pixel-button font-pixel text-black px-8 py-6 text-lg hover:scale-105 transition-transform">
                START CREATING
              </Button>
              <Button
                variant="outline"
                className="border-2 border-orange-500 text-orange-500 font-pixel px-8 py-6 text-lg hover:bg-orange-500 hover:text-black transition-colors bg-transparent"
              >
                EXPLORE NFTS
              </Button>
            </div>
          </div>

          {/* Moving carousel */}
          <div className="space-y-6 overflow-hidden">
            {/* First row - moving right */}
            <div className="relative">
              <div className="flex animate-scroll-right" style={{ width: 'fit-content' }}>
                {/* Create 3 complete sets for seamless looping */}
                {Array.from({ length: 3 }).map((_, setIndex) => (
                  <div key={`set1-${setIndex}`} className="flex">
                    {Array.from({ length: 15 }).map((_, i) => (
                      <div
                        key={`row1-${setIndex}-${i}`}
                        className="flex-shrink-0 w-32 h-32 mx-3 nft-card overflow-hidden"
                      >
                        <img 
                          src={creatorImages[i % creatorImages.length]} 
                          alt={`Creator ${i + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Second row - moving left */}
            <div className="relative">
              <div className="flex animate-scroll-left" style={{ width: 'fit-content' }}>
                {/* Create 3 complete sets for seamless looping */}
                {Array.from({ length: 3 }).map((_, setIndex) => (
                  <div key={`set2-${setIndex}`} className="flex">
                    {Array.from({ length: 15 }).map((_, i) => (
                      <div
                        key={`row2-${setIndex}-${i}`}
                        className="flex-shrink-0 w-32 h-32 mx-3 nft-card overflow-hidden"
                      >
                        <img 
                          src={brandImages[i % brandImages.length]} 
                          alt={`Brand ${i + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-neutral-950 text-neutral-200 py-12 px-4 mt-24">
        <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-4">
          <div className="space-y-3">
            <div className="text-2xl font-pixel text-orange-500">FRELYST</div>
            <p className="font-tech text-sm text-neutral-400">Empowering creators, brands, and communities.</p>
          </div>
          <div className="space-y-2">
            <div className="font-pixel text-orange-400 text-sm">PRODUCT</div>
            <ul className="font-tech text-sm space-y-1 text-neutral-300">
              <li><a href="#" className="hover:text-orange-400">Mint</a></li>
              <li><a href="#" className="hover:text-orange-400">Campaigns</a></li>
              <li><a href="#" className="hover:text-orange-400">Explore</a></li>
            </ul>
          </div>
          <div className="space-y-2">
            <div className="font-pixel text-orange-400 text-sm">RESOURCES</div>
            <ul className="font-tech text-sm space-y-1 text-neutral-300">
              <li><a href="#" className="hover:text-orange-400">Docs</a></li>
              <li><a href="#" className="hover:text-orange-400">Blog</a></li>
              <li><a href="#" className="hover:text-orange-400">Support</a></li>
            </ul>
          </div>
          <div className="space-y-2">
            <div className="font-pixel text-orange-400 text-sm">LEGAL</div>
            <ul className="font-tech text-sm space-y-1 text-neutral-300">
              <li><a href="#" className="hover:text-orange-400">Terms</a></li>
              <li><a href="#" className="hover:text-orange-400">Privacy</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-10 border-t border-neutral-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-tech text-xs text-neutral-500">© {new Date().getFullYear()} Frelyst. All rights reserved.</p>
          <div className="flex items-center gap-4 text-neutral-400 text-sm">
            <a href="#" className="hover:text-orange-400">Twitter</a>
            <a href="#" className="hover:text-orange-400">Discord</a>
            <a href="#" className="hover:text-orange-400">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
