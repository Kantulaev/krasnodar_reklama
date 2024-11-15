import React from "react";
import theme from "theme";
import { Theme, Link, Text, LinkBox, Box, Section, Icon, Span, Button, Image, Strong, Hr } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
import { FaTelegram, FaWhatsapp, FaWhatsappSquare } from "react-icons/fa";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section
			sm-padding="24 0 24 0"
			quarkly-title="Header-5"
			background="--color-light"
			sm-margin="0 0 0 0"
			sm-background="--color-light"
		>
			<Override
				slot="SectionContent"
				flex-direction="row"
				justify-content="space-between"
				lg-text-align="left"
				lg-align-self="auto"
			/>
			<Box
				display="flex"
				justify-content="center"
				align-items="flex-start"
				flex-direction="row"
				width="100%"
				sm-align-items="center"
				sm-flex-direction="row"
				sm-justify-content="flex-start"
				md-justify-content="center"
				sm-display="flex"
			>
				<LinkBox
					flex-direction="row"
					href="/index"
					display="flex"
					grid-gap="12px"
					sm-text-align="left"
				>
					<Text
						md-margin="0px 0 0px 0"
						text-align="left"
						font="--headline1"
						sm-margin="0px 0 0px 0"
						display="block"
						color="--red"
						lg-text-align="left"
						sm-text-align="center"
					>
						Красный Домик
					</Text>
				</LinkBox>
			</Box>
		</Section>
		<Section overflow-x="hidden" overflow-y="hidden" quarkly-title="Hero-6" sm-padding="0 0 24px 0">
			<Override slot="SectionContent" width="100%" flex="1 1 0%" max-width="100%" />
			<Box
				min-width="100px"
				min-height="100px"
				display="flex"
				position="static"
				lg-flex-direction="column"
				border-color="#04080C"
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
					<Text margin="20px 0px 20px 0px" font="--headline3" sm-margin="20px 0px 20px 0px">
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
					height="900px"
					left="614px"
					right="-52px"
					top="-28px"
					flex="1 1 0%"
					lg-margin="0px 0 0px 0px"
					lg-align-self="center"
					lg-padding="0px 0px 80px 0px"
					sm-flex="1 1 0%"
					sm-align-self="auto"
					sm-width="100%"
					sm-padding="0px 0px 40px 0px"
				>
					<Image
						src="https://uploads.quarkly.io/673219af9710450018a442af/images/Designer%20%2812%29%20%281%29.jpeg?v=2024-11-15T18:31:47.551Z"
						display="block"
						max-width="100%"
						object-fit="cover"
						border-radius="64px"
						margin="0px 0px 15px 0px"
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
							src="https://uploads.quarkly.io/673219af9710450018a442af/images/a4fd36d1d791d1c7af89d96a23a3%20%281%29.jpg?v=2024-11-11T15:49:20.362Z"
							border-radius="24px"
							max-width="100%"
							width="100%"
							object-fit="cover"
							lg-max-height="392px"
							object-position="50% 50%"
							sm-max-height="213px"
							height="522px"
							srcSet="https://smartuploads.quarkly.io/673219af9710450018a442af/images/a4fd36d1d791d1c7af89d96a23a3%20%281%29.jpg?v=2024-11-11T15%3A49%3A20.362Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/673219af9710450018a442af/images/a4fd36d1d791d1c7af89d96a23a3%20%281%29.jpg?v=2024-11-11T15%3A49%3A20.362Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/673219af9710450018a442af/images/a4fd36d1d791d1c7af89d96a23a3%20%281%29.jpg?v=2024-11-11T15%3A49%3A20.362Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/673219af9710450018a442af/images/a4fd36d1d791d1c7af89d96a23a3%20%281%29.jpg?v=2024-11-11T15%3A49%3A20.362Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/673219af9710450018a442af/images/a4fd36d1d791d1c7af89d96a23a3%20%281%29.jpg?v=2024-11-11T15%3A49%3A20.362Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/673219af9710450018a442af/images/a4fd36d1d791d1c7af89d96a23a3%20%281%29.jpg?v=2024-11-11T15%3A49%3A20.362Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/673219af9710450018a442af/images/a4fd36d1d791d1c7af89d96a23a3%20%281%29.jpg?v=2024-11-11T15%3A49%3A20.362Z&quality=85&w=3200 3200w"
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
							src="https://uploads.quarkly.io/673219af9710450018a442af/images/64af5735ea8abc6d1e719a4258a4%20%281%29.jpg?v=2024-11-11T15:49:20.369Z"
							border-radius="24px"
							max-width="100%"
							width="100%"
							object-fit="cover"
							lg-max-height="392px"
							object-position="50% 50%"
							sm-max-height="213px"
							height="522px"
							srcSet="https://smartuploads.quarkly.io/673219af9710450018a442af/images/64af5735ea8abc6d1e719a4258a4%20%281%29.jpg?v=2024-11-11T15%3A49%3A20.369Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/673219af9710450018a442af/images/64af5735ea8abc6d1e719a4258a4%20%281%29.jpg?v=2024-11-11T15%3A49%3A20.369Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/673219af9710450018a442af/images/64af5735ea8abc6d1e719a4258a4%20%281%29.jpg?v=2024-11-11T15%3A49%3A20.369Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/673219af9710450018a442af/images/64af5735ea8abc6d1e719a4258a4%20%281%29.jpg?v=2024-11-11T15%3A49%3A20.369Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/673219af9710450018a442af/images/64af5735ea8abc6d1e719a4258a4%20%281%29.jpg?v=2024-11-11T15%3A49%3A20.369Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/673219af9710450018a442af/images/64af5735ea8abc6d1e719a4258a4%20%281%29.jpg?v=2024-11-11T15%3A49%3A20.369Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/673219af9710450018a442af/images/64af5735ea8abc6d1e719a4258a4%20%281%29.jpg?v=2024-11-11T15%3A49%3A20.369Z&quality=85&w=3200 3200w"
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
							src="https://uploads.quarkly.io/673219af9710450018a442af/images/5070aee2c215dce89006675880a7%20%281%29.jpg?v=2024-11-11T15:49:20.375Z"
							border-radius="24px"
							max-width="100%"
							width="100%"
							object-fit="cover"
							lg-max-height="392px"
							object-position="50% 50%"
							sm-max-height="213px"
							height="522px"
							srcSet="https://smartuploads.quarkly.io/673219af9710450018a442af/images/5070aee2c215dce89006675880a7%20%281%29.jpg?v=2024-11-11T15%3A49%3A20.375Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/673219af9710450018a442af/images/5070aee2c215dce89006675880a7%20%281%29.jpg?v=2024-11-11T15%3A49%3A20.375Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/673219af9710450018a442af/images/5070aee2c215dce89006675880a7%20%281%29.jpg?v=2024-11-11T15%3A49%3A20.375Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/673219af9710450018a442af/images/5070aee2c215dce89006675880a7%20%281%29.jpg?v=2024-11-11T15%3A49%3A20.375Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/673219af9710450018a442af/images/5070aee2c215dce89006675880a7%20%281%29.jpg?v=2024-11-11T15%3A49%3A20.375Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/673219af9710450018a442af/images/5070aee2c215dce89006675880a7%20%281%29.jpg?v=2024-11-11T15%3A49%3A20.375Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/673219af9710450018a442af/images/5070aee2c215dce89006675880a7%20%281%29.jpg?v=2024-11-11T15%3A49%3A20.375Z&quality=85&w=3200 3200w"
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
							src="https://uploads.quarkly.io/673219af9710450018a442af/images/acdafc54804b0b5bd4d496131ef7%20%281%29.jpg?v=2024-11-11T15:49:20.377Z"
							border-radius="24px"
							max-width="100%"
							width="100%"
							object-fit="cover"
							lg-max-height="392px"
							object-position="50% 50%"
							sm-max-height="213px"
							height="522px"
							srcSet="https://smartuploads.quarkly.io/673219af9710450018a442af/images/acdafc54804b0b5bd4d496131ef7%20%281%29.jpg?v=2024-11-11T15%3A49%3A20.377Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/673219af9710450018a442af/images/acdafc54804b0b5bd4d496131ef7%20%281%29.jpg?v=2024-11-11T15%3A49%3A20.377Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/673219af9710450018a442af/images/acdafc54804b0b5bd4d496131ef7%20%281%29.jpg?v=2024-11-11T15%3A49%3A20.377Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/673219af9710450018a442af/images/acdafc54804b0b5bd4d496131ef7%20%281%29.jpg?v=2024-11-11T15%3A49%3A20.377Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/673219af9710450018a442af/images/acdafc54804b0b5bd4d496131ef7%20%281%29.jpg?v=2024-11-11T15%3A49%3A20.377Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/673219af9710450018a442af/images/acdafc54804b0b5bd4d496131ef7%20%281%29.jpg?v=2024-11-11T15%3A49%3A20.377Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/673219af9710450018a442af/images/acdafc54804b0b5bd4d496131ef7%20%281%29.jpg?v=2024-11-11T15%3A49%3A20.377Z&quality=85&w=3200 3200w"
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
		<Section padding="80px 0 90px 0" quarkly-title="Product-5">
			<Override slot="SectionContent" align-items="center" />
			<Text
				margin="0px 0px 20px 0px"
				font="--headline1"
				text-align="center"
				lg-width="70%"
				md-width="100%"
				color="--darkL1"
			>
				Лучшее оборудование,{" "}
				<br />
				безупречное качество{" "}
			</Text>
			<Text
				margin="0px 0px 20px 0px"
				text-align="center"
				font="normal 500 28px/1.2 --fontFamily-sans"
				color="--darkL1"
				padding="0px 280px 0px 280px"
				lg-padding="0px 0 0px 0"
				lg-margin="0px 0px 50px 0px"
			>
				Делаем ваш бренд ярким и долговечным!
			</Text>
			<Hr
				min-height="10px"
				margin="0px 0px 50px 0px"
				border-color="--color-darkL1"
				width="40px"
				border-width="2px 0 0 0"
			/>
			<Box
				min-width="100px"
				min-height="100px"
				display="grid"
				grid-template-columns="repeat(3, 1fr)"
				grid-template-rows="auto"
				grid-gap="0 35px"
				md-grid-template-columns="1fr"
				md-grid-gap="40px 0"
				margin="0px 0px 70px 0px"
				md-margin="0px 0px 50px 0px"
			>
				<Box
					min-width="100px"
					min-height="100px"
					display="flex"
					flex-direction="column"
					align-items="flex-start"
				>
					<Image
						src="https://uploads.quarkly.io/673219af9710450018a442af/images/f97748e0da64237faf12.%20%281%29.jpg?v=2024-11-11T16:42:53.789Z"
						display="block"
						max-width="100%"
						margin="0px 0px 25px 0px"
						object-fit="cover"
						sm-height="350px"
						height="600px"
						lg-height="400px"
						md-width="100%"
						md-height="450px"
						border-radius="64px"
						srcSet="https://smartuploads.quarkly.io/673219af9710450018a442af/images/f97748e0da64237faf12.%20%281%29.jpg?v=2024-11-11T16%3A42%3A53.789Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/673219af9710450018a442af/images/f97748e0da64237faf12.%20%281%29.jpg?v=2024-11-11T16%3A42%3A53.789Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/673219af9710450018a442af/images/f97748e0da64237faf12.%20%281%29.jpg?v=2024-11-11T16%3A42%3A53.789Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/673219af9710450018a442af/images/f97748e0da64237faf12.%20%281%29.jpg?v=2024-11-11T16%3A42%3A53.789Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/673219af9710450018a442af/images/f97748e0da64237faf12.%20%281%29.jpg?v=2024-11-11T16%3A42%3A53.789Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/673219af9710450018a442af/images/f97748e0da64237faf12.%20%281%29.jpg?v=2024-11-11T16%3A42%3A53.789Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/673219af9710450018a442af/images/f97748e0da64237faf12.%20%281%29.jpg?v=2024-11-11T16%3A42%3A53.789Z&quality=85&w=3200 3200w"
						sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
					/>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					display="flex"
					flex-direction="column"
					align-items="flex-start"
				>
					<Image
						src="https://uploads.quarkly.io/673219af9710450018a442af/images/1f0168138d330f10f551.%20%281%29.jpg?v=2024-11-11T16:42:53.841Z"
						display="block"
						max-width="100%"
						margin="0px 0px 25px 0px"
						object-fit="cover"
						sm-height="350px"
						height="600px"
						lg-height="400px"
						md-width="100%"
						md-height="450px"
						border-radius="64px"
						srcSet="https://smartuploads.quarkly.io/673219af9710450018a442af/images/1f0168138d330f10f551.%20%281%29.jpg?v=2024-11-11T16%3A42%3A53.841Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/673219af9710450018a442af/images/1f0168138d330f10f551.%20%281%29.jpg?v=2024-11-11T16%3A42%3A53.841Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/673219af9710450018a442af/images/1f0168138d330f10f551.%20%281%29.jpg?v=2024-11-11T16%3A42%3A53.841Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/673219af9710450018a442af/images/1f0168138d330f10f551.%20%281%29.jpg?v=2024-11-11T16%3A42%3A53.841Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/673219af9710450018a442af/images/1f0168138d330f10f551.%20%281%29.jpg?v=2024-11-11T16%3A42%3A53.841Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/673219af9710450018a442af/images/1f0168138d330f10f551.%20%281%29.jpg?v=2024-11-11T16%3A42%3A53.841Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/673219af9710450018a442af/images/1f0168138d330f10f551.%20%281%29.jpg?v=2024-11-11T16%3A42%3A53.841Z&quality=85&w=3200 3200w"
						sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
					/>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					display="flex"
					flex-direction="column"
					align-items="flex-start"
				>
					<Image
						src="https://uploads.quarkly.io/673219af9710450018a442af/images/5011fa46d218c90fa133.%20%281%29.jpg?v=2024-11-11T16:43:52.959Z"
						display="block"
						max-width="100%"
						margin="0px 0px 25px 0px"
						object-fit="cover"
						sm-height="350px"
						height="600px"
						lg-height="400px"
						md-width="100%"
						md-height="450px"
						border-radius="64px"
						srcSet="https://smartuploads.quarkly.io/673219af9710450018a442af/images/5011fa46d218c90fa133.%20%281%29.jpg?v=2024-11-11T16%3A43%3A52.959Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/673219af9710450018a442af/images/5011fa46d218c90fa133.%20%281%29.jpg?v=2024-11-11T16%3A43%3A52.959Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/673219af9710450018a442af/images/5011fa46d218c90fa133.%20%281%29.jpg?v=2024-11-11T16%3A43%3A52.959Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/673219af9710450018a442af/images/5011fa46d218c90fa133.%20%281%29.jpg?v=2024-11-11T16%3A43%3A52.959Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/673219af9710450018a442af/images/5011fa46d218c90fa133.%20%281%29.jpg?v=2024-11-11T16%3A43%3A52.959Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/673219af9710450018a442af/images/5011fa46d218c90fa133.%20%281%29.jpg?v=2024-11-11T16%3A43%3A52.959Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/673219af9710450018a442af/images/5011fa46d218c90fa133.%20%281%29.jpg?v=2024-11-11T16%3A43%3A52.959Z&quality=85&w=3200 3200w"
						sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
					/>
				</Box>
			</Box>
		</Section>
		<Section padding="80px 0 90px 0" background="--color-dark" quarkly-title="Partners-4">
			<Box
				min-width="100px"
				min-height="100px"
				display="flex"
				margin="0px 0px 70px 0px"
				justify-content="space-between"
				md-flex-direction="column"
			>
				<Text
					margin="10px 70px 0px 0px"
					color="--light"
					width="60%"
					font="--lead"
					lg-width="45%"
					md-width="100%"
					md-margin="20px 0 10px 0px"
				>
					Мы гордимся сотрудничеством с ведущими брендами в сфере канцелярии и одежды. Наши партнеры — это признанные лидеры, которые доверяют нам производство и брендирование своей продукции. Благодаря этому мы гарантируем высокое качество, стильный дизайн и надежность изделий, соответствующих стандартам мировых компаний.{"\n\n"}
				</Text>
				<Text margin="0px 0px 0px 0px" color="--light" font="--headline1" md-order="-1">
					Наши партнеры
				</Text>
			</Box>
			<Box
				display="flex"
				text-align="center"
				grid-gap="12px 24px"
				lg-grid-template-columns="repeat(3, 1fr)"
				lg-grid-gap="36px 24px"
				sm-grid-template-columns="repeat(2, 1fr)"
				flex-wrap="wrap"
				justify-content="space-between"
				sm-flex-direction="column"
				sm-align-items="flex-start"
				sm-display="grid"
				overflow="visible"
				grid-row-gap="24px"
			>
				<Text margin="0px 30px 0px 0px" color="--light" font="--headline3" white-space="nowrap">
					Waterline{"\n\n"}
				</Text>
				<Text margin="0px 30px 0px 0px" color="--light" font="--headline3" white-space="nowrap">
					Zippo{"\n\n"}
				</Text>
				<Text margin="0px 30px 0px 0px" color="--light" font="--headline3" white-space="nowrap">
					Prodir{"\n\n"}
				</Text>
				<Text margin="0px 30px 0px 0px" color="--light" font="--headline3" white-space="nowrap">
					UMA{"\n\n"}
				</Text>
				<Text margin="0px 30px 0px 0px" color="--light" font="--headline3" white-space="nowrap">
					Michael Kors{"\n\n"}
				</Text>
				<Text margin="0px 30px 0px 0px" color="--light" font="--headline3" white-space="nowrap">
					Varvara{"\n\n"}
				</Text>
				<Text margin="0px 30px 0px 0px" color="--light" font="--headline3" white-space="nowrap">
					Lamy{"\n\n\n\n"}
				</Text>
				<Text margin="0px 30px 0px 0px" color="--light" font="--headline3" white-space="nowrap">
					Rivacase
				</Text>
				<Text margin="0px 30px 0px 0px" color="--light" font="--headline3" white-space="nowrap">
					Xiaomi{"\n\n\n\n"}
				</Text>
				<Text margin="0px 30px 0px 0px" color="--light" font="--headline3" white-space="nowrap">
					Rombica{"\n\n\n\n"}
				</Text>
				<Text margin="0px 30px 0px 0px" color="--light" font="--headline3" white-space="nowrap">
					Moleskine{"\n\n\n\n"}
				</Text>
				<Text margin="0px 30px 0px 0px" color="--light" font="--headline3" white-space="nowrap">
					Fossil{"\n\n\n\n"}
				</Text>
				<Text margin="0px 30px 0px 0px" color="--light" font="--headline3" white-space="nowrap">
					Baldinini
				</Text>
				<Text margin="0px 30px 0px 0px" color="--light" font="--headline3" white-space="nowrap">
					Chinelli
				</Text>
			</Box>
		</Section>
		<Section padding="90px 0 100px 0" background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/643d8e6ebf72b300207d7233/images/blurred-premium-violet-color-abstract-wallpaper.jpg?v=2023-04-27T14:14:02.129Z) 0% 0% /cover repeat scroll padding-box" quarkly-title="Reviews-4">
			<Text margin="0px 0px 70px 0px" font="--headline2" text-align="center" md-margin="0px 0px 50px 0px">
				О нас говорят
			</Text>
			<Box min-width="100px" min-height="100px" display="flex" lg-flex-direction="column">
				<Box
					min-width="100px"
					min-height="100px"
					width="25%"
					lg-width="100%"
					lg-display="flex"
					md-flex-direction="column"
					flex-direction="column"
					lg-flex-direction="row"
				>
					<Box
						min-width="100px"
						min-height="100px"
						padding="20px 20px 20px 20px"
						background="#f3f3f7"
						border-radius="8px"
						box-shadow="--m"
						display="flex"
						flex-direction="column"
						lg-margin="0px 0 25px 0px"
						sm-padding="20px 15px 20px 15px"
						margin="0px 5px 25px 0px"
						justify-content="space-between"
					>
						<Box min-width="100px" min-height="100px">
							<Text margin="0px 0px 18px 0px" font="--lead" color="--darkL1">
								Работаем с этим агентством уже несколько лет, и всегда остаёмся довольны! Ребята знают, как создать качественные сувениры и рекламные материалы. Всегда соблюдают сроки и понимают, что нужно нашему бренду.
							</Text>
						</Box>
					</Box>
					<Box
						min-width="100px"
						min-height="100px"
						padding="20px 20px 20px 20px"
						background="#f3f3f7"
						border-radius="8px"
						box-shadow="--m"
						display="flex"
						flex-direction="column"
						lg-margin="0px 0 25px 0px"
						sm-padding="20px 15px 20px 15px"
						margin="0px 5px 25px 0px"
						justify-content="space-between"
					>
						<Box min-width="100px" min-height="100px">
							<Text margin="0px 0px 18px 0px" font="--lead" color="--darkL1">
								Лучшая команда, с которой мне доводилось работать! Помогли с дизайном, предложили интересные решения и сделали всё оперативно. Всем рекомендую.
							</Text>
						</Box>
					</Box>
					<Box
						min-width="100px"
						min-height="100px"
						padding="20px 20px 20px 20px"
						background="#f3f3f7"
						border-radius="8px"
						box-shadow="--m"
						display="flex"
						flex-direction="column"
						lg-margin="0px 0 25px 0px"
						sm-padding="20px 15px 20px 15px"
						margin="0px 5px 25px 0px"
						justify-content="space-between"
					>
						<Box min-width="100px" min-height="100px">
							<Text margin="0px 0px 18px 0px" font="--lead" color="--darkL1">
								Заказывали сувениры для выставки, и всё получилось именно так, как мы хотели. Отличное качество, дизайн на высоте, а главное — вовремя! Спасибо за профессионализм.
							</Text>
						</Box>
					</Box>
				</Box>
				<Box min-width="100px" min-height="100px" width="50%" lg-width="100%">
					<Box
						min-width="100px"
						min-height="100px"
						padding="30px 0 10px 0"
						background="#f3f3f7"
						border-radius="8px"
						box-shadow="--m"
						margin="0px 20px 25px 20px"
						display="flex"
						flex-direction="column"
						justify-content="space-between"
						lg-margin="0px 0 25px 0px"
						md-padding="20px 0 10px 0"
					>
						<Box min-width="100px" min-height="100px">
							<Text
								margin="0px 0px 28px 0px"
								font="--lead"
								color="--darkL1"
								padding="0px 30px 0px 30px"
								md-padding="0px 20px 0px 20px"
								md-margin="0px 0px 25px 0px"
							>
								Понравилось, что учли все наши пожелания и предложили отличные идеи, о которых мы даже не думали. Отзывы от клиентов очень положительные, так что агентство нас не подвело.
							</Text>
						</Box>
					</Box>
					<Box
						min-width="100px"
						display="grid"
						grid-template-columns="repeat(2, 1fr)"
						grid-template-rows="repeat(2, 1fr)"
						md-grid-template-columns="1fr"
						md-grid-template-rows="auto"
						min-height="100px"
					>
						<Box
							min-width="100px"
							min-height="100px"
							padding="20px 20px 20px 20px"
							background="#f3f3f7"
							border-radius="8px"
							box-shadow="--m"
							margin="0px 12px 25px 20px"
							display="flex"
							flex-direction="column"
							lg-margin="0px 10px 25px 0px"
							sm-margin="0px 0 25px 0px"
							md-margin="0px 0 25px 0px"
							justify-content="space-between"
						>
							<Text margin="0px 0px 18px 0px" font="--lead" color="--darkL1">
								Команда смогла сделать невозможное — реализовали проект всего за 3 дня! Сувениры получились яркие и качественные, что привлекло много внимания к нашему бренду.
							</Text>
						</Box>
						<Box
							min-width="100px"
							min-height="100px"
							padding="20px 20px 20px 20px"
							background="#f3f3f7"
							border-radius="8px"
							box-shadow="--m"
							margin="0px 12px 25px 20px"
							display="flex"
							flex-direction="column"
							lg-margin="0px 10px 25px 0px"
							sm-margin="0px 0 25px 0px"
							md-margin="0px 0 25px 0px"
							justify-content="space-between"
						>
							<Text margin="0px 0px 18px 0px" font="--lead" color="--darkL1">
								Работали с разными агентствами, но это — лучший опыт. Все выполнено в срок, качество продукции отменное, и цены приятно удивили. Обязательно обратимся снова.
							</Text>
						</Box>
						<Box
							min-width="100px"
							min-height="100px"
							padding="20px 20px 20px 20px"
							background="#f3f3f7"
							border-radius="8px"
							box-shadow="--m"
							margin="0px 12px 25px 20px"
							display="flex"
							flex-direction="column"
							lg-margin="0px 10px 25px 0px"
							sm-margin="0px 0 25px 0px"
							md-margin="0px 0 25px 0px"
							justify-content="space-between"
						>
							<Text margin="0px 0px 18px 0px" font="--lead" color="--darkL1">
								Огромное спасибо за индивидуальный подход и внимание к деталям. Каждый этап был под контролем, а сотрудники всегда на связи. Агентство, которому можно доверять!"
							</Text>
						</Box>
						<Box
							min-width="100px"
							min-height="100px"
							padding="20px 20px 20px 20px"
							background="#f3f3f7"
							border-radius="8px"
							box-shadow="--m"
							margin="0px 12px 25px 20px"
							display="flex"
							flex-direction="column"
							lg-margin="0px 10px 25px 0px"
							sm-margin="0px 0 25px 0px"
							md-margin="0px 0 25px 0px"
							justify-content="space-between"
						>
							<Text margin="0px 0px 18px 0px" font="--lead" color="--darkL1">
								Очень довольны сотрудничеством! Получили нужный результат даже раньше срока, а качество на высоте. Заказали партию сувениров, и уже знаем, к кому обратимся в следующий раз.
							</Text>
						</Box>
					</Box>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					width="25%"
					lg-width="100%"
					lg-display="flex"
					md-flex-direction="column"
				>
					<Box
						min-width="100px"
						min-height="100px"
						padding="20px 20px 20px 20px"
						background="#f3f3f7"
						border-radius="8px"
						box-shadow="--m"
						margin="0px 0 25px 5px"
						display="flex"
						flex-direction="column"
						lg-margin="0px 0 0 0px"
						sm-padding="20px 15px 20px 15px"
						md-margin="0 0 25px 0"
						justify-content="space-between"
					>
						<Box min-width="100px" min-height="100px">
							<Text margin="0px 0px 18px 0px" font="--lead" color="--darkL1">
								Отличное агентство! Заказывали у них полиграфию и рекламные материалы для открытия нового филиала. Всё получилось очень стильно и привлекательно, прямо как хотели. Рады, что обратились именно к ним!
							</Text>
						</Box>
					</Box>
					<Box
						min-width="100px"
						min-height="100px"
						padding="20px 20px 20px 20px"
						background="#f3f3f7"
						border-radius="8px"
						box-shadow="--m"
						margin="0px 0 25px 5px"
						display="flex"
						flex-direction="column"
						lg-margin="0px 0 0 0px"
						sm-padding="20px 15px 20px 15px"
						md-margin="0 0 25px 0"
						justify-content="space-between"
					>
						<Box min-width="100px" min-height="100px">
							<Text margin="0px 0px 18px 0px" font="--lead" color="--darkL1">
								С этим агентством можно быть спокойным за результат. Заказывали у них сувениры и брендированные аксессуары для партнёров — всё выполнено качественно, аккуратно, и наши партнёры остались довольны.
							</Text>
						</Box>
					</Box>
					<Box
						min-width="100px"
						min-height="100px"
						padding="20px 20px 20px 20px"
						background="#f3f3f7"
						border-radius="8px"
						box-shadow="--m"
						margin="0px 0 25px 5px"
						display="flex"
						flex-direction="column"
						lg-margin="0px 0 0 0px"
						sm-padding="20px 15px 20px 15px"
						md-margin="0 0 25px 0"
						justify-content="space-between"
					>
						<Box min-width="100px" min-height="100px">
							<Text margin="0px 0px 18px 0px" font="--lead" color="--darkL1">
								Очень приятно работать с профессионалами, которые знают своё дело. Ребята предложили интересные идеи и сделали продукцию, которую хочется использовать каждый день. Спасибо за креативность и внимание!
							</Text>
						</Box>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section padding="60px 0 60px 0" lg-padding="80px 0 90px 0" quarkly-title="Stages/Steps-2" background="--color-darkL1">
			<Text margin="0px 0px 40px 0px" font="--headline2" color="--light">
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
						<Text margin="0px 0px 15px 0px" border-color="--color-light" color="--light" font="--headline3">
							<Strong>
								Обсуждение{" "}
								<br />
								и выбор решения
							</Strong>
							{"\n\n"}
						</Text>
						<Text margin="0px 0px 0px 0px" font="--lead" color="#bbc4cd">
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
							<Strong>
								Подготовка макетов
							</Strong>
							<br />
							{"\n\n"}
						</Text>
						<Text margin="0px 0px 0px 0px" font="--lead" color="#bbc4cd">
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
							<Strong>
								Производство
							</Strong>
							<br />
							{"\n\n"}
						</Text>
						<Text margin="0px 0px 0px 0px" font="--lead" color="#bbc4cd">
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
							<Strong>
								Доставка и поддержка
							</Strong>
							<br />
							{"\n\n"}
						</Text>
						<Text margin="0px 0px 0px 0px" font="--lead" color="#bbc4cd">
							Мы организуем доставку продукции или готовим её к самовывозу. Остаемся на связи для обсуждения повторных заказов или новых проектов.{"\n\n"}
						</Text>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section padding="60px 0" sm-padding="40px 0" color="--dark">
			<Text as="h1" font="--headline1" margin="0 0 24px 0">
				Часто задаваемые вопросы
			</Text>
			<Box margin="-16px -16px -16px -16px" display="flex" flex-wrap="wrap">
				<Box padding="16px 16px 16px 16px" width="33.333%" md-width="100%">
					<Box display="flex" flex-direction="column">
						<Text as="h3" font="--headline3" margin="12px 0">
							<Strong>
								1. Какие виды нанесения вы предлагаете?
							</Strong>
							{"\n\n"}
						</Text>
						<Text as="p" font="--lead" margin="12px 0" color="--greyD2">
							Мы предлагаем широкий спектр технологий нанесения: от вышивки и трафаретной печати до УФ-печати, гравировки, термотрансфера, тиснения, деколи и других. Подберем оптимальный метод для любого материала.{"\n\n"}
						</Text>
					</Box>
				</Box>
				<Box padding="16px 16px 16px 16px" width="33.333%" md-width="100%">
					<Box display="flex" flex-direction="column">
						<Text as="h3" font="--headline3" margin="12px 0">
							<Strong>
								2. Какие материалы вы используете для брендирования?
							</Strong>
							{"\n\n"}
						</Text>
						<Text as="p" font="--lead" margin="12px 0" color="--greyD2">
							Мы работаем с текстилем, пластиком, деревом, металлом, кожей, стеклом, бумагой, картоном и керамикой. Также доступны уникальные материалы, такие как камень и ПВХ.{"\n\n\n\n"}
						</Text>
					</Box>
				</Box>
				<Box padding="16px 16px 16px 16px" width="33.333%" md-width="100%">
					<Box display="flex" flex-direction="column">
						<Text as="h3" font="--headline3" margin="12px 0">
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
								{"\n"}
								<Strong>
									3. Можно ли заказать небольшую партию продукции?
								</Strong>
								<br />
							</Strong>
						</Text>
						<Text as="p" font="--lead" margin="12px 0" color="--greyD2">
							Да, мы выполняем заказы от небольших партий до крупных тиражей. Минимальное количество зависит от типа нанесения и продукции.{"\n\n\n\n"}
						</Text>
					</Box>
				</Box>
				<Box padding="16px 16px 16px 16px" width="33.333%" md-width="100%">
					<Box display="flex" flex-direction="column">
						<Text as="h3" font="--headline3" margin="12px 0">
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
								{"\n"}
								<Strong>
									4. Как быстро вы выполняете заказы?
								</Strong>
								{"\n\n"}
							</Strong>
							{"\n\n"}
						</Text>
						<Text as="p" font="--lead" margin="12px 0" color="--greyD2">
							Сроки зависят от объема и сложности заказа. Для срочных проектов у нас есть услуга нанесения за 24 часа.{"\n\n\n\n"}
						</Text>
					</Box>
				</Box>
				<Box padding="16px 16px 16px 16px" width="33.333%" md-width="100%">
					<Box display="flex" flex-direction="column">
						<Text as="h3" font="--headline3" margin="12px 0">
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
								{"\n"}
								<Strong>
									5. Могу ли я заказать брендирование на своих материалах?
								</Strong>
								{"\n\n"}
							</Strong>
							{"\n\n"}
						</Text>
						<Text as="p" font="--lead" margin="12px 0" color="--greyD2">
							Да, мы можем нанести ваш логотип или изображение на предоставленные вами изделия, если они подходят для выбранной технологии.{"\n\n\n\n"}
						</Text>
					</Box>
				</Box>
				<Box padding="16px 16px 16px 16px" width="33.333%" md-width="100%">
					<Box display="flex" flex-direction="column">
						<Text as="h3" font="--headline3" margin="12px 0">
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
								{"\n"}
								<Strong>
									6. Вы работаете с известными брендами?
								</Strong>
								<br />
								{"\n\n"}
							</Strong>
							{"\n\n"}
						</Text>
						<Text as="p" font="--lead" margin="12px 0" color="--greyD2">
							Да, мы сотрудничаем с ведущими мировыми брендами канцелярии, одежды и аксессуаров, гарантируя высочайшее качество продукции.{"\n\n\n\n"}
						</Text>
					</Box>
				</Box>
				<Box padding="16px 16px 16px 16px" width="33.333%" md-width="100%">
					<Box display="flex" flex-direction="column">
						<Text as="h3" font="--headline3" margin="12px 0">
							<Strong>
								7. Какие файлы нужны для печати или нанесения?
							</Strong>
							<br />
							{"\n\n"}
						</Text>
						<Text as="p" font="--lead" margin="12px 0" color="--greyD2">
							Нам понадобятся макеты в векторных форматах (например, AI, EPS, PDF). При необходимости мы поможем адаптировать или создать дизайн.{"\n\n\n\n"}
						</Text>
					</Box>
				</Box>
				<Box padding="16px 16px 16px 16px" width="33.333%" md-width="100%">
					<Box display="flex" flex-direction="column">
						<Text as="h3" font="--headline3" margin="12px 0">
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
								<Strong>
									8. У вас есть доставка?
								</Strong>
								<br />
								{"\n\n"}
							</Strong>
							{"\n\n"}
						</Text>
						<Text as="p" font="--lead" margin="12px 0" color="--greyD2">
							Да, мы предлагаем доставку по всей стране. Также возможен самовывоз из нашего офиса или склада.{"\n\n\n\n"}
						</Text>
					</Box>
				</Box>
				<Box padding="16px 16px 16px 16px" width="33.333%" md-width="100%">
					<Box display="flex" flex-direction="column">
						<Text as="h3" font="--headline3" margin="12px 0">
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
								<Strong>
									9. Можно ли посмотреть образцы перед заказом?
								</Strong>
								<br />
								{"\n\n"}
							</Strong>
							{"\n\n"}
						</Text>
						<Text as="p" font="--lead" margin="12px 0" color="--greyD2">
							Да, мы предоставляем образцы продукции и вариантов нанесения, чтобы вы могли оценить качество перед подтверждением заказа.{"\n\n\n\n"}
						</Text>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section background="--color-darkL1" padding="40px 0 40px 0" sm-margin="0 0 0 0" sm-padding="60px 0 60px 0">
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
				<Text margin="0px 0px 0 0px" font="--headline3" color="--light" text-align="center">
					<Link href="https://yandex.com/maps/-/CDtW4YmJ" color="#ffffff" font="--headline3" target="_blank">
						350010, Краснодар, Зиповская ул., 5Г,{" "}
						<br />
						микрорайон Завод Измерительных Приборов
					</Link>
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
					Рекламное агентство "Красный Домик"{" "}
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