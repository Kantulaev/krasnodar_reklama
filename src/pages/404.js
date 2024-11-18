import React from "react";
import theme from "theme";
import { Theme, Link } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"404"} />
		<Helmet>
			<title>
				Рекламный Дом. Рекламное агентство полного спектра.
			</title>
			<meta name={"description"} content={"Полный спектр рекламы для вашего успеха.Креативные сувениры, стильная полиграфия и эффективная реклама — вот, что мы предлагаем. Наши решения работают на ваш имидж. Поднимите ваш бренд на новый уровень с нашей помощью."} />
			<meta property={"og:title"} content={"Рекламный Дом. Рекламное агентство полного спектра."} />
			<meta property={"og:description"} content={"Полный спектр рекламы для вашего успеха.Креативные сувениры, стильная полиграфия и эффективная реклама — вот, что мы предлагаем. Наши решения работают на ваш имидж. Поднимите ваш бренд на новый уровень с нашей помощью."} />
			<meta property={"og:image"} content={"https://uploads.quarkly.io/673219af9710450018a442af/images/Remove-bg.ai_1731943634635.png?v=2024-11-18T15:36:56.810Z"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/673219af9710450018a442af/images/favicon-16x16.png?v=2024-11-18T15:34:39.185Z"} type={"image/x-icon"} />
			<link rel={"apple-touch-icon"} href={"https://uploads.quarkly.io/673219af9710450018a442af/images/apple-touch-icon.png?v=2024-11-18T15:34:39.189Z"} />
			<link rel={"apple-touch-icon"} sizes={"76x76"} href={"https://uploads.quarkly.io/673219af9710450018a442af/images/apple-touch-icon.png?v=2024-11-18T15:34:39.189Z"} />
			<link rel={"apple-touch-icon"} sizes={"152x152"} href={"https://uploads.quarkly.io/673219af9710450018a442af/images/apple-touch-icon.png?v=2024-11-18T15:34:39.189Z"} />
			<link rel={"apple-touch-startup-image"} href={"https://uploads.quarkly.io/673219af9710450018a442af/images/apple-touch-icon.png?v=2024-11-18T15:34:39.189Z"} />
			<meta name={"msapplication-TileImage"} content={"https://uploads.quarkly.io/673219af9710450018a442af/images/android-chrome-512x512.png?v=2024-11-18T15:34:39.197Z"} />
			<meta name={"msapplication-TileColor"} content={"#ff0000"} />
		</Helmet>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"673219af9710450018a442ad"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});