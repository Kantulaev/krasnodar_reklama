import React from "react";
import theme from "theme";
import { Theme, Link, Text, LinkBox, Box, Section, Icon, Span, Button, Image, Strong } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
import { FaTelegram, FaWhatsapp, FaWhatsappSquare } from "react-icons/fa";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
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
		<Section quarkly-title="Header-4" sm-display="block">
			<Override
				slot="SectionContent"
				display="flex"
				flex="0 1 auto"
				overflow-y="auto"
				justify-content="center"
				align-items="center"
				flex-direction="row"
				sm-flex-direction="row"
				sm-align-items="center"
				sm-display="flex"
				sm-flex-wrap="no-wrap"
				sm-overflow="visible"
				lg-align-items="center"
				lg-display="flex"
				lg-flex-direction="row"
				lg-justify-content="center"
				sm-overflow-y="visible"
				sm-justify-content="center"
				sm-grid-column-gap="32px"
			/>
			<Box
				display="flex"
				padding="12px 0"
				justify-content="flex-start"
				align-items="flex-start"
				flex-direction="row"
				sm-align-items="center"
				sm-flex-direction="row"
				sm-justify-content="flex-start"
				md-width="70%"
				lg-width="70%"
				md-justify-content="flex-start"
				flex-wrap="no-wrap"
				align-content="center"
				width="70%"
				overflow="hidden"
				sm-display="flex"
				sm-overflow="visible"
				sm-width="85%"
			>
				<LinkBox flex-direction="row" href="/index" display="flex" grid-gap="12px">
					<Text
						margin="0"
						md-margin="0px 0 0px 0"
						text-align="left"
						font="--headline2"
						sm-margin="0px 0 0px 0"
						display="block"
						color="--red"
						sm-font="--headline3"
					>
						Рекламный Дом
					</Text>
				</LinkBox>
			</Box>
			<Box
				display="flex"
				padding="12px 0"
				justify-content="space-between"
				align-items="flex-start"
				flex-direction="row"
				sm-align-items="center"
				sm-flex-direction="row"
				sm-justify-content="center"
				lg-width="20%"
				md-justify-content="flex-start"
				width="10%"
				flex-wrap="no-wrap"
				md-width="15%"
				sm-display="flex"
				sm-margin="0px 16px 0px 0px"
			>
				<LinkBox flex-direction="row" href="#contacts" display="flex" grid-gap="12px">
					<Text
						margin="0"
						md-margin="0px 0 0px 0"
						text-align="left"
						font="--headline3"
						sm-margin="0px 0 0px 0"
						display="block"
						color="--dark"
						sm-font="--lead"
					>
						Контакты
					</Text>
				</LinkBox>
			</Box>
		</Section>
		<Section
			overflow-x="hidden"
			overflow-y="hidden"
			quarkly-title="Hero-6"
			sm-padding="0 0 24px 0"
			margin="0 24 0 0"
		>
			<Override
				slot="SectionContent"
				width="100%"
				flex="1 1 0%"
				max-width="100%"
				lg-margin="0px 0 0px 0px"
			/>
			<Box
				min-width="100px"
				min-height="100px"
				display="flex"
				position="static"
				lg-flex-direction="column"
				border-color="#04080C"
				lg-display="flex"
				lg-flex-wrap="no-wrap"
			>
				<Box
					min-width="100px"
					min-height="100px"
					width="55%"
					padding="60px 80px 60px 80px"
					position="static"
					lg-width="100%"
					lg-padding="80px 30px 80px 30px"
					sm-padding="40px 30px 40px 30px"
				>
					<Text margin="0px 0px 20px 0px" font="--headline1" sm-font="--headline2">
						Полный спектр рекламы для вашего успеха
					</Text>
					<Text margin="60px 0px 60px 0px" font="--headline3" sm-margin="20px 0px 20px 0px">
						Креативные сувениры, стильная полиграфия и эффективная реклама — вот, что мы предлагаем. Наши решения работают на ваш имидж. Поднимите ваш бренд на новый уровень с нашей помощью.
					</Text>
					<Box
						min-width="100px"
						min-height="100px"
						display="flex"
						sm-margin="-20px 0px 0px 0px"
						margin="-20px 0px 0px 0px"
					>
						{"      "}
						<Button
							top="871px"
							left="324px"
							z-index="2"
							href="https://t.me/+79385305730"
							bottom="2750.999984741211px"
							height="50px"
							right="1402.310015258789px"
							width="150px"
							overflow-x="visible"
							overflow-y="visible"
							position="static"
							display="flex"
							align-items="center"
							margin="32px 24px 16px 0px"
							border-radius="40px"
							target="_blank"
							type="link"
						>
							{"        "}
							<Icon category="fa" icon={FaTelegram} size="32px" margin="0px 8px 0px 0px" />
							{"        "}
							<Span text-align="center" position="static" display="grid" flex="1 1 0%">
								{"          "}Telegram{"\n        "}
							</Span>
							{"      "}
						</Button>
						{"      "}
						<Button
							top="871px"
							left="324px"
							z-index="2"
							href="https://wa.me/79385305730"
							bottom="2750.999984741211px"
							right="1402.310015258789px"
							overflow-x="visible"
							overflow-y="visible"
							position="static"
							display="flex"
							width="150px"
							height="50px"
							align-items="center"
							border-radius="40px"
							margin="32px 0px 0px 0px"
							disabled={false}
							background="#00cc0f"
							target="_blank"
							type="link"
						>
							{"        "}
							<Icon category="fa" icon={FaWhatsapp} size="32px" margin="0px 8px 0px 0px" />
							{"        "}
							<Span
								text-align="center"
								position="static"
								display="grid"
								flex="1 1 0%"
								as="span"
							>
								{"          "}Whatsapp{"\n        "}
							</Span>
							{"      "}
						</Button>
						{"    "}
					</Box>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					display="flex"
					position="static"
					bottom="-298px"
					left="614px"
					right="-52px"
					top="-28px"
					flex="1 1 0%"
					lg-align-self="center"
					sm-flex="1 1 0%"
					sm-align-self="auto"
					align-items="center"
					flex-direction="row"
					justify-content="center"
					overflow="hidden"
					border-radius="128px 0px 0px 128px"
					width="45%"
					flex-wrap="no-wrap"
					height="900px"
					lg-width="100%"
					lg-border-radius="128px"
				>
					<Image
						src="https://uploads.quarkly.io/673219af9710450018a442af/images/Designer%20%2812%29%20%281%29.jpeg?v=2024-11-15T18:31:47.551Z"
						display="block"
						max-width="100%"
						object-fit="fill"
						sm-overflow="hidden"
						sm-overflow-x="auto"
						sm-overflow-y="auto"
						overflow="hidden"
						srcSet="https://smartuploads.quarkly.io/673219af9710450018a442af/images/Designer%20%2812%29%20%281%29.jpeg?v=2024-11-15T18%3A31%3A47.551Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/673219af9710450018a442af/images/Designer%20%2812%29%20%281%29.jpeg?v=2024-11-15T18%3A31%3A47.551Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/673219af9710450018a442af/images/Designer%20%2812%29%20%281%29.jpeg?v=2024-11-15T18%3A31%3A47.551Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/673219af9710450018a442af/images/Designer%20%2812%29%20%281%29.jpeg?v=2024-11-15T18%3A31%3A47.551Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/673219af9710450018a442af/images/Designer%20%2812%29%20%281%29.jpeg?v=2024-11-15T18%3A31%3A47.551Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/673219af9710450018a442af/images/Designer%20%2812%29%20%281%29.jpeg?v=2024-11-15T18%3A31%3A47.551Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/673219af9710450018a442af/images/Designer%20%2812%29%20%281%29.jpeg?v=2024-11-15T18%3A31%3A47.551Z&quality=85&w=3200 3200w"
						sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
					/>
				</Box>
			</Box>
		</Section>
		<Section padding="80px 0 80px 0" lg-padding="56px 0 56px 0" sm-padding="32px 0 32px 0" background="--color-dark">
			<Override slot="SectionContent" flex-direction="row" flex-wrap="wrap" />
			<Box
				margin="0px 0px 32px 0px"
				md-margin="0px 0px 40px 0px"
				lg-margin="0px 0px 33px 0px"
				display="flex"
				flex-direction="column"
				align-items="center"
				lg-padding="15px 15px 15px 15px"
				sm-margin="0px 0px 10px 0px"
				justify-content="center"
				width="100%"
			>
				<Text
					font="--headline1"
					color="--light"
					text-align="center"
					md-font="normal 700 42px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
					margin="16px 0px 32px 0px"
				>
					Примеры работ
				</Text>
			</Box>
			<Box
				display="grid"
				grid-template-columns="repeat(3, 1fr)"
				grid-gap="32px"
				lg-grid-template-columns="repeat(2, 1fr)"
				sm-grid-template-columns="1fr"
				width="100%"
			>
				<LinkBox
					display="flex"
					md-flex-direction="column"
					md-align-items="center"
					md-justify-content="center"
					flex-wrap="wrap"
					sm-width="100%"
					grid-column="1 / span 1"
					sm-align-self="auto"
					sm-grid-column="auto"
					justify-content="flex-start"
				>
					<Box
						width="100%"
						align-items="flex-start"
						display="flex"
						justify-content="flex-start"
						md-width="100%"
						md-margin="0px 0px 0px 0px"
						lg-width="100%"
					>
						<Image
							src="https://uploads.quarkly.io/673219af9710450018a442af/images/5860efcbe1bc26fa088a4cd22f84%20%281%29.jpg?v=2024-11-18T14:49:05.076Z"
							border-radius="24px"
							max-width="100%"
							width="100%"
							object-fit="cover"
							lg-max-height="392px"
							object-position="50% 50%"
							sm-max-height="213px"
							height="522px"
							srcSet="https://smartuploads.quarkly.io/673219af9710450018a442af/images/5860efcbe1bc26fa088a4cd22f84%20%281%29.jpg?v=2024-11-18T14%3A49%3A05.076Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/673219af9710450018a442af/images/5860efcbe1bc26fa088a4cd22f84%20%281%29.jpg?v=2024-11-18T14%3A49%3A05.076Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/673219af9710450018a442af/images/5860efcbe1bc26fa088a4cd22f84%20%281%29.jpg?v=2024-11-18T14%3A49%3A05.076Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/673219af9710450018a442af/images/5860efcbe1bc26fa088a4cd22f84%20%281%29.jpg?v=2024-11-18T14%3A49%3A05.076Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/673219af9710450018a442af/images/5860efcbe1bc26fa088a4cd22f84%20%281%29.jpg?v=2024-11-18T14%3A49%3A05.076Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/673219af9710450018a442af/images/5860efcbe1bc26fa088a4cd22f84%20%281%29.jpg?v=2024-11-18T14%3A49%3A05.076Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/673219af9710450018a442af/images/5860efcbe1bc26fa088a4cd22f84%20%281%29.jpg?v=2024-11-18T14%3A49%3A05.076Z&quality=85&w=3200 3200w"
							sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
						/>
					</Box>
					<Box
						width="100%"
						padding="16px 12px 16px 12px"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						md-width="100%"
						md-border-width="0px"
						flex-direction="column"
					>
						<Text margin="0px 0px 8px 0px" font="--headline3" color="--light">
							Уникальные сувениры для яркого впечатления!
						</Text>
					</Box>
				</LinkBox>
				<LinkBox
					display="flex"
					md-flex-direction="column"
					md-align-items="center"
					md-justify-content="center"
					flex-wrap="wrap"
					sm-width="100%"
					grid-column="2 / span 2"
					lg-grid-column="2 / span 1"
					sm-align-self="auto"
					sm-grid-column="auto"
					justify-content="flex-start"
				>
					<Box
						width="100%"
						align-items="flex-start"
						display="flex"
						justify-content="flex-start"
						md-width="100%"
						md-margin="0px 0px 0px 0px"
						lg-width="100%"
					>
						<Image
							src="https://uploads.quarkly.io/673219af9710450018a442af/images/3d91decda4228682c87c6ddb9603%20%281%29.jpg?v=2024-11-18T14:49:05.071Z"
							border-radius="24px"
							max-width="100%"
							width="100%"
							object-fit="cover"
							lg-max-height="392px"
							object-position="50% 50%"
							sm-max-height="213px"
							height="522px"
							srcSet="https://smartuploads.quarkly.io/673219af9710450018a442af/images/3d91decda4228682c87c6ddb9603%20%281%29.jpg?v=2024-11-18T14%3A49%3A05.071Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/673219af9710450018a442af/images/3d91decda4228682c87c6ddb9603%20%281%29.jpg?v=2024-11-18T14%3A49%3A05.071Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/673219af9710450018a442af/images/3d91decda4228682c87c6ddb9603%20%281%29.jpg?v=2024-11-18T14%3A49%3A05.071Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/673219af9710450018a442af/images/3d91decda4228682c87c6ddb9603%20%281%29.jpg?v=2024-11-18T14%3A49%3A05.071Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/673219af9710450018a442af/images/3d91decda4228682c87c6ddb9603%20%281%29.jpg?v=2024-11-18T14%3A49%3A05.071Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/673219af9710450018a442af/images/3d91decda4228682c87c6ddb9603%20%281%29.jpg?v=2024-11-18T14%3A49%3A05.071Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/673219af9710450018a442af/images/3d91decda4228682c87c6ddb9603%20%281%29.jpg?v=2024-11-18T14%3A49%3A05.071Z&quality=85&w=3200 3200w"
							sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
						/>
					</Box>
					<Box
						width="100%"
						padding="16px 12px 16px 12px"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						md-width="100%"
						md-border-width="0px"
						flex-direction="column"
					>
						<Text margin="0px 0px 8px 0px" font="--headline3" color="--light">
							Брендируем с душой и вниманием к каждой детали!
						</Text>
					</Box>
				</LinkBox>
				<LinkBox
					display="flex"
					md-flex-direction="column"
					md-align-items="center"
					md-justify-content="center"
					flex-wrap="wrap"
					lg-align-items="flex-start"
					sm-width="100%"
					grid-column="1 / span 2"
					lg-grid-column="1 / span 1"
					sm-align-self="auto"
					sm-grid-column="auto"
					justify-content="flex-start"
				>
					<Box
						width="100%"
						align-items="flex-start"
						display="flex"
						justify-content="flex-start"
						md-width="100%"
						md-margin="0px 0px 0px 0px"
						lg-width="100%"
					>
						<Image
							src="https://uploads.quarkly.io/673219af9710450018a442af/images/fa981e2512a7901aebf27a606fcf%20%281%29.jpg?v=2024-11-18T14:49:05.066Z"
							border-radius="24px"
							max-width="100%"
							width="100%"
							object-fit="cover"
							lg-max-height="392px"
							object-position="50% 50%"
							sm-max-height="213px"
							height="522px"
							srcSet="https://smartuploads.quarkly.io/673219af9710450018a442af/images/fa981e2512a7901aebf27a606fcf%20%281%29.jpg?v=2024-11-18T14%3A49%3A05.066Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/673219af9710450018a442af/images/fa981e2512a7901aebf27a606fcf%20%281%29.jpg?v=2024-11-18T14%3A49%3A05.066Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/673219af9710450018a442af/images/fa981e2512a7901aebf27a606fcf%20%281%29.jpg?v=2024-11-18T14%3A49%3A05.066Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/673219af9710450018a442af/images/fa981e2512a7901aebf27a606fcf%20%281%29.jpg?v=2024-11-18T14%3A49%3A05.066Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/673219af9710450018a442af/images/fa981e2512a7901aebf27a606fcf%20%281%29.jpg?v=2024-11-18T14%3A49%3A05.066Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/673219af9710450018a442af/images/fa981e2512a7901aebf27a606fcf%20%281%29.jpg?v=2024-11-18T14%3A49%3A05.066Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/673219af9710450018a442af/images/fa981e2512a7901aebf27a606fcf%20%281%29.jpg?v=2024-11-18T14%3A49%3A05.066Z&quality=85&w=3200 3200w"
							sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
						/>
					</Box>
					<Box
						width="100%"
						padding="16px 12px 16px 12px"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						md-width="100%"
						md-border-width="0px"
						flex-direction="column"
					>
						<Text margin="0px 0px 8px 0px" font="--headline3" color="--light">
							Логотип, который расскажет о вашем бренде!
						</Text>
					</Box>
				</LinkBox>
				<LinkBox
					display="flex"
					md-flex-direction="column"
					md-align-items="center"
					md-justify-content="center"
					flex-wrap="wrap"
					sm-width="100%"
					grid-column="3 / span 1"
					lg-grid-column="2 / span 1"
					sm-align-self="auto"
					sm-grid-column="auto"
					justify-content="flex-start"
				>
					<Box
						width="100%"
						align-items="flex-start"
						display="flex"
						justify-content="flex-start"
						md-width="100%"
						md-margin="0px 0px 0px 0px"
						lg-width="100%"
					>
						<Image
							src="https://uploads.quarkly.io/673219af9710450018a442af/images/45f5d079390c0349f65068b04fe3%20%281%29.jpg?v=2024-11-18T14:49:05.062Z"
							border-radius="24px"
							max-width="100%"
							width="100%"
							object-fit="cover"
							lg-max-height="392px"
							object-position="50% 50%"
							sm-max-height="213px"
							height="522px"
							srcSet="https://smartuploads.quarkly.io/673219af9710450018a442af/images/45f5d079390c0349f65068b04fe3%20%281%29.jpg?v=2024-11-18T14%3A49%3A05.062Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/673219af9710450018a442af/images/45f5d079390c0349f65068b04fe3%20%281%29.jpg?v=2024-11-18T14%3A49%3A05.062Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/673219af9710450018a442af/images/45f5d079390c0349f65068b04fe3%20%281%29.jpg?v=2024-11-18T14%3A49%3A05.062Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/673219af9710450018a442af/images/45f5d079390c0349f65068b04fe3%20%281%29.jpg?v=2024-11-18T14%3A49%3A05.062Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/673219af9710450018a442af/images/45f5d079390c0349f65068b04fe3%20%281%29.jpg?v=2024-11-18T14%3A49%3A05.062Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/673219af9710450018a442af/images/45f5d079390c0349f65068b04fe3%20%281%29.jpg?v=2024-11-18T14%3A49%3A05.062Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/673219af9710450018a442af/images/45f5d079390c0349f65068b04fe3%20%281%29.jpg?v=2024-11-18T14%3A49%3A05.062Z&quality=85&w=3200 3200w"
							sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
						/>
					</Box>
					<Box
						width="100%"
						padding="16px 12px 16px 12px"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						md-width="100%"
						md-border-width="0px"
						flex-direction="column"
					>
						<Text margin="0px 0px 8px 0px" font="--headline3" color="--light">
							Каждый предмет с вашим логотипом — это шаг к успеху!
						</Text>
					</Box>
				</LinkBox>
			</Box>
		</Section>
		<Section padding="80px 0 80px 0" sm-padding="60px 0 60px 0" background="--color-light">
			<Override slot="SectionContent" flex-direction="row" md-flex-wrap="wrap" />
			<Box
				width="50%"
				display="flex"
				flex-direction="column"
				justify-content="space-between"
				md-width="100%"
				padding="0px 80px 0px 0px"
				lg-padding="0px 30px 0px 0px"
				md-padding="0px 0px 0px 0px"
			>
				<Text margin="0px 0px 0px 0px" color="--darkL1" font="--headline2" md-margin="0px 0px 30px 0px">
					Мы предлагаем широкий спектр технологий нанесения, чтобы ваш бренд выглядел безупречно на любых материалах.
				</Text>
			</Box>
			<Box
				width="50%"
				display="flex"
				flex-direction="column"
				justify-content="space-between"
				md-width="100%"
			>
				<Text margin="0px 0px 0px 0px" color="--darkL1" font="--headline3">
					Для текстиля доступны трафаретная печать с фольгой и светоотражающими красками, DTG-принтеры для цифровой печати, вышивка, термотрансфер (DTF), а также пришивные патчи и лейблы. Для твердых материалов, таких как пластик, металл, стекло, дерево, кожа, и керамика, мы используем тампонную печать, гравировку, УФ-печать, деколь, и трафаретную печать. Особое внимание уделяем премиальным техникам, включая тиснение, заливку полимерной смолой, металлостикеры и шильды.
				</Text>
			</Box>
		</Section>
		<Section padding="88px 0 88px 0" background="--color-dark" quarkly-title="Stats">
			<Override slot="SectionContent" max-width="1220px" flex-direction="row" flex-wrap="wrap" />
			<Box
				width="100%"
				padding="15px 15px 15px 15px"
				display="flex"
				flex-direction="column"
				justify-content="center"
				align-items="center"
			>
				<Text margin="0px 0px 24px 0px" font="--headline1" color="#ffffff">
					Немного данных
				</Text>
				<Text
					margin="0px 0px 0px 0px"
					font="--lead"
					color="--light"
					width="45%"
					text-align="center"
					lg-width="100%"
				/>
			</Box>
			<Box
				width="100%"
				margin="30px 0px 30px 0px"
				border-radius="64px"
				background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/673219af9710450018a442af/images/8cac74afef57541818b01a591216%20%282%29.jpg?v=2024-11-11T16:37:31.462Z) 50% 50% /100% no-repeat scroll padding-box"
				min-height="336px"
				sm-min-height="200px"
				overflow="visible"
			/>
			<Box
				width="25%"
				padding="15px 15px 15px 15px"
				display="flex"
				align-items="flex-start"
				justify-content="center"
				flex-direction="column"
				lg-width="50%"
				sm-width="100%"
			>
				<Text margin="0px 0px 16px 0px" font="--headline1" color="--light">
					<Strong>
						95%{" "}
					</Strong>
				</Text>
				<Text margin="0px 0px 0px 0px" font="--headline3" color="--orange" text-align="left">
					<Strong font="--headline3" color="--light">
						Соблюдения сроков по проектам
					</Strong>
				</Text>
			</Box>
			<Box
				width="25%"
				padding="15px 15px 15px 15px"
				display="flex"
				align-items="flex-start"
				justify-content="center"
				flex-direction="column"
				lg-width="50%"
				sm-width="100%"
			>
				<Text margin="0px 0px 16px 0px" font="--headline1" color="--light">
					<Strong
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
						user-select="auto"
						pointer-events="auto"
					>
						50+{" "}
					</Strong>
				</Text>
				<Text margin="0px 0px 0px 0px" font="--headline3" color="--orange" text-align="left">
					<Strong
						font="--headline3"
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
						user-select="auto"
						pointer-events="auto"
						color="--light"
					>
						Уникальных видов сувенирной продукции
					</Strong>
				</Text>
			</Box>
			<Box
				width="25%"
				padding="15px 15px 15px 15px"
				display="flex"
				align-items="flex-start"
				justify-content="center"
				flex-direction="column"
				lg-width="50%"
				sm-width="100%"
			>
				<Text margin="0px 0px 16px 0px" font="--headline1" color="--light">
					<Strong
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
						user-select="auto"
						pointer-events="auto"
					>
						600+{" "}
					</Strong>
				</Text>
				<Text margin="0px 0px 0px 0px" font="--headline3" color="--light" text-align="left">
					Успешных проектов
				</Text>
			</Box>
			<Box
				width="25%"
				padding="15px 15px 15px 15px"
				display="flex"
				align-items="flex-start"
				justify-content="center"
				flex-direction="column"
				lg-width="50%"
				sm-width="100%"
			>
				<Text margin="0px 0px 16px 0px" font="--headline1" color="--light">
					<Strong
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
						user-select="auto"
						pointer-events="auto"
					>
						98%{" "}
					</Strong>
				</Text>
				<Text margin="0px 0px 0px 0px" font="--headline3" color="--orange" text-align="left">
					<Strong
						font="--headline3"
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
						user-select="auto"
						pointer-events="auto"
						color="--light"
					>
						Клиентов рекомендуют нас
					</Strong>
				</Text>
			</Box>
		</Section>
		<Section padding="60px 0 60px 0" lg-padding="80px 0 90px 0" quarkly-title="Stages/Steps-2" background="--color-light">
			<Text margin="0px 0px 40px 0px" font="--headline2" color="--darkL1" border-color="--color-darkL1">
				Как мы работаем с клиентами
			</Text>
			<Box
				min-width="100px"
				min-height="100px"
				display="grid"
				grid-template-columns="repeat(2, 1fr)"
				grid-template-rows="repeat(2, 1fr)"
				grid-gap="40px 30px"
				md-grid-template-columns="1fr"
				md-grid-template-rows="auto"
				md-grid-gap="26px"
			>
				<Box
					min-width="100px"
					min-height="100px"
					display="flex"
					padding="0px 70px 0px 0px"
					lg-padding="0px 0 0px 0px"
				>
					<Box
						min-width="40px"
						min-height="40px"
						background="#283c67"
						align-items="center"
						display="flex"
						justify-content="center"
						width="40px"
						height="40px"
						border-radius="50%"
					>
						<Text margin="0px 0px 0px 0px" color="--light" font="--headline3" text-align="center">
							1
						</Text>
					</Box>
					<Box min-width="100px" min-height="100px" margin="0px 0px 0px 25px">
						<Text margin="0px 0px 15px 0px" border-color="--color-light" color="--darkL1" font="--headline3">
							<Strong>
								Обсуждение{" "}
								<br />
								и выбор решения
							</Strong>
							{"\n\n"}
						</Text>
						<Text margin="0px 0px 0px 0px" font="--lead" color="--darkL2">
							Мы изучаем ваши потребности, помогаем выбрать подходящие материалы, технологии нанесения и создаем концепцию брендирования.{"\n\n"}
						</Text>
					</Box>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					display="flex"
					padding="0px 70px 0px 0px"
					lg-padding="0px 0 0px 0px"
				>
					<Box
						min-width="40px"
						min-height="40px"
						background="#283c67"
						align-items="center"
						display="flex"
						justify-content="center"
						width="40px"
						height="40px"
						border-radius="50%"
					>
						<Text margin="0px 0px 0px 0px" color="--light" font="--headline3" text-align="center">
							2
						</Text>
					</Box>
					<Box min-width="100px" min-height="100px" margin="0px 0px 0px 25px">
						<Text margin="0px 0px 15px 0px" border-color="--color-light" color="--light" font="--headline3">
							<Strong color="--darkL1">
								Подготовка макетов
							</Strong>
							<br />
							{"\n\n"}
						</Text>
						<Text margin="0px 0px 0px 0px" font="--lead" color="--darkL2">
							Наши дизайнеры разрабатывают или адаптируют макеты под выбранный способ нанесения. Вы получаете на согласование готовые визуализации.{"\n\n"}
						</Text>
					</Box>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					display="flex"
					padding="0px 70px 0px 0px"
					lg-padding="0px 0 0px 0px"
				>
					<Box
						min-width="40px"
						min-height="40px"
						background="#283c67"
						align-items="center"
						display="flex"
						justify-content="center"
						width="40px"
						height="40px"
						border-radius="50%"
					>
						<Text margin="0px 0px 0px 0px" color="--light" font="--headline3" text-align="center">
							3
						</Text>
					</Box>
					<Box min-width="100px" min-height="100px" margin="0px 0px 0px 25px">
						<Text margin="0px 0px 15px 0px" border-color="--color-light" color="--light" font="--headline3">
							<Strong color="--darkL1">
								Производство
							</Strong>
							<br />
							{"\n\n"}
						</Text>
						<Text margin="0px 0px 0px 0px" font="--lead" color="--darkL2">
							После утверждения макета мы приступаем к работе. Используя современное оборудование, мы обеспечиваем высокое качество и точное соблюдение сроков.{"\n\n"}
						</Text>
					</Box>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					display="flex"
					padding="0px 70px 0px 0px"
					lg-padding="0px 0 0px 0px"
				>
					<Box
						min-width="40px"
						min-height="40px"
						background="#283c67"
						align-items="center"
						display="flex"
						justify-content="center"
						width="40px"
						height="40px"
						border-radius="50%"
					>
						<Text margin="0px 0px 0px 0px" color="--light" font="--headline3" text-align="center">
							4
						</Text>
					</Box>
					<Box min-width="100px" min-height="100px" margin="0px 0px 0px 25px">
						<Text margin="0px 0px 15px 0px" border-color="--color-light" color="--light" font="--headline3">
							<Strong color="--darkL1">
								Доставка и поддержка
							</Strong>
							<br />
							{"\n\n"}
						</Text>
						<Text margin="0px 0px 0px 0px" font="--lead" color="--darkL2">
							Мы организуем доставку продукции или готовим её к самовывозу. Остаемся на связи для обсуждения повторных заказов или новых проектов.{"\n\n"}
						</Text>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section
			background="--color-darkL1"
			padding="40px 0 40px 0"
			sm-margin="0 0 0 0"
			sm-padding="60px 0 60px 0"
			id="contacts"
		>
			<Box
				display="flex"
				align-items="center"
				flex-direction="column"
				justify-content="center"
				padding="0px 200px 0px 200px"
				lg-padding="0px 0px 0px 0px"
			>
				<Text
					margin="0px 0px 30px 0px"
					font="--headline1"
					color="--light"
					text-align="center"
					sm-font="normal 700 62px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
				>
					Контакты
				</Text>
				<Text margin="0px 0px 48px 0px" font="--headline3" color="--light" text-align="center">
					Свяжитесь с нами, чтобы узнать точные цены!
				</Text>
				<Link
					href="tel:+79385305730"
					text-align="center"
					color="--light"
					font="--headline3"
					text-decoration-line="underline"
					margin="0px 0px 16px 0px"
					target="_blank"
				>
					+7 (938) 530-57-30
				</Link>
				<Link
					href="mailto:blank?rekdomik@gmail.com"
					text-align="center"
					color="--light"
					font="--headline3"
					text-decoration-line="underline"
					margin="0px 0px 16px 0px"
				>
					rekdomik@gmail.com
				</Link>
				<Link
					href="mailto:blank?rd.ooo@bk.ru"
					text-align="center"
					color="--light"
					font="--headline3"
					text-decoration-line="underline"
					margin="0px 0px 16px 0px"
				>
					rd.ooo@bk.ru
				</Link>
				<Text margin="0px 0px 16px 0px" font="--headline3" color="--light" text-align="center">
					<Link href="https://yandex.com/maps/-/CDtW4YmJ" color="#ffffff" font="--headline3" target="_blank">
						350010, Краснодар, Зиповская ул., 5Г,{" "}
						<br />
						микрорайон Завод Измерительных Приборов
					</Link>
				</Text>
				<Text margin="0px 0px 0 0px" font="--headline3" color="--light" text-align="center">
					Понедельник - Пятница
					<br />
					9:00 - 18:00
				</Text>
				<Box min-width="100px" min-height="100px" display="flex" margin="20px 0px 0px 0px">
					{"      "}
					<Button
						top="871px"
						left="324px"
						z-index="2"
						href="https://t.me/+79385305730"
						bottom="2750.999984741211px"
						height="50px"
						right="1402.310015258789px"
						width="150px"
						overflow-x="visible"
						overflow-y="visible"
						position="static"
						display="flex"
						align-items="center"
						margin="32px 24px 16px 0px"
						border-radius="40px"
						target="_blank"
						type="link"
					>
						{"        "}
						<Icon category="fa" icon={FaTelegram} size="32px" margin="0px 8px 0px 0px" />
						{"        "}
						<Span text-align="center" position="static" display="grid" flex="1 1 0%">
							{"          "}Telegram{"\n        "}
						</Span>
						{"      "}
					</Button>
					{"      "}
					<Button
						top="871px"
						left="324px"
						z-index="2"
						href="https://wa.me/79385305730"
						bottom="2750.999984741211px"
						right="1402.310015258789px"
						overflow-x="visible"
						overflow-y="visible"
						position="static"
						display="flex"
						width="150px"
						height="50px"
						align-items="center"
						border-radius="40px"
						margin="32px 0px 0px 0px"
						disabled={false}
						background="#00cc0f"
						target="_blank"
						type="link"
					>
						{"        "}
						<Icon category="fa" icon={FaWhatsapp} size="32px" margin="0px 8px 0px 0px" />
						{"        "}
						<Span
							text-align="center"
							position="static"
							display="grid"
							flex="1 1 0%"
							as="span"
						>
							{"          "}Whatsapp{"\n        "}
						</Span>
						{"      "}
					</Button>
					{"    "}
				</Box>
			</Box>
		</Section>
		<Section quarkly-title="Footer" sm-padding="0 0 0 0">
			<Override
				slot="SectionContent"
				sm-height="auto"
				sm-align-self="center"
				sm-justify-content="center"
				sm-align-items="center"
				sm-flex-direction="column"
				sm-align-content="flex-start"
				sm-flex-wrap="no-wrap"
				sm-margin="18px 28.8px 0px 28.8px"
				sm-display="flex"
			/>
			<Box
				min-width="100px"
				min-height="100px"
				display="flex"
				align-content="center"
				justify-content="center"
			>
				<LinkBox margin="0px 32px 0px 0px" href="https://t.me/+79385305730" target="_blank">
					<Icon category="fa" icon={FaTelegram} size="64px" color="--darkL1" />
				</LinkBox>
				<LinkBox href="https://wa.me/79385305730" target="_blank">
					<Icon category="fa" icon={FaWhatsappSquare} size="64px" color="--darkL1" />
				</LinkBox>
			</Box>
			<Text
				margin="0"
				md-margin="0px 0 20px 0"
				text-align="center"
				font="--lead"
				sm-height="auto"
				display="block"
			>
				<Strong
					sm-text-align="center"
					sm-font="--headline4"
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					user-select="auto"
					pointer-events="auto"
				>
					Рекламное агентство "Рекламный Дом"{" "}
					<br />
					Полный спектр рекламы для вашего успеха
				</Strong>
			</Text>
		</Section>
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