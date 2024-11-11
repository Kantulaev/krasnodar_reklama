import React from "react";
import theme from "theme";
import { Theme, Link, Image, Text, LinkBox, Box, Section, Button, Hr, Strong } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, SocialMedia } from "@quarkly/components";
import * as Components from "components";
import { FiMenu } from "react-icons/fi";
import { AiOutlineMenu } from "react-icons/ai";
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
		<Section sm-padding="8px 0 8px 0" quarkly-title="Header-5">
			<Override slot="SectionContent" flex-direction="row" justify-content="space-between" />
			<Box
				display="flex"
				padding="12px 0"
				justify-content="space-between"
				align-items="flex-start"
				flex-direction="row"
				width="30%"
				sm-width="50%"
				sm-align-items="center"
				sm-flex-direction="row"
				sm-justify-content="flex-start"
				md-width="50%"
				lg-width="70%"
				md-justify-content="flex-start"
			>
				<LinkBox flex-direction="row" href="/index" display="flex" grid-gap="12px">
					<Image src="https://uploads.quarkly.io/6457b971d28fe100213a0f35/images/flower-logo-template.svg?v=2023-08-06T19:34:51.878Z" display="block" width="36px" height="36px" />
					<Text
						margin="0"
						md-margin="0px 0 0px 0"
						text-align="left"
						font="--lead"
						sm-margin="0px 0 0px 0"
						display="block"
					>
						Company
					</Text>
				</LinkBox>
			</Box>
			<Components.QuarklycommunityKitMobileSidePanel
				menuPosition="full"
				breakpoint="lg"
				width="70%"
				sm-width="50%"
				md-width="50%"
				lg-width="30%"
			>
				<Override slot="Children" md-display="flex" />
				<Override
					slot="Content"
					padding="0px 0px 0px 0px"
					background="rgba(255, 255, 255, 0)"
					lg-background="#ffffff"
					lg-margin="0px 0px 0px 0px"
				/>
				<Override
					slot="Button Text"
					font="normal 600 16px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
					text-transform="uppercase"
					letter-spacing="1px"
					sm-font="normal 600 14px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
					sm-margin="0px 2px 0px 0px"
					lg-margin="0px 0px 0px 0px"
				/>
				<Override
					slot="Button Icon :closed"
					category="fi"
					icon={FiMenu}
					size="32px"
					padding="5px 7px 5px 7px"
					border-radius="50px"
				/>
				<Override
					slot="Button Icon"
					width="28px"
					height="28px"
					category="ai"
					icon={AiOutlineMenu}
					color="--dark"
					size="24px"
					lg-width="32px"
					lg-height="32px"
				/>
				<Override
					slot="Cross"
					lg-width="32px"
					lg-height="32px"
					size="32px"
					top="24px"
					right="24px"
				/>
				<Box
					align-items="center"
					lg-justify-content="center"
					lg-align-items="flex-start"
					justify-content="flex-end"
					display="flex"
					lg-flex-direction="column"
					lg-margin="0px auto 0px auto"
					lg-min-width="300px"
					lg-max-width="1280px"
					lg-width="90%"
					lg-padding="24px 0px 48px 0px"
				>
					<Box
						display="none"
						lg-width="100%"
						lg-margin="0px 0px 24px 0px"
						lg-display="flex"
						lg-padding="12px 0px 12px 0px"
					>
						<LinkBox flex-direction="row" href="/index" display="flex" grid-gap="12px">
							<Image src="https://uploads.quarkly.io/6457b971d28fe100213a0f35/images/flower-logo-template.svg?v=2023-08-06T19:34:51.878Z" display="block" width="36px" height="36px" />
							<Text
								margin="0"
								md-margin="0px 0 0px 0"
								text-align="left"
								font="--lead"
								sm-margin="0px 0 0px 0"
								display="block"
								lg-font="--lead"
							>
								Company
							</Text>
						</LinkBox>
					</Box>
					<Components.QuarklycommunityKitMenu
						display="flex"
						filterMode="exclude"
						filterPages="/index"
						grid-gap="12px"
						lg-flex-direction="column"
						lg-padding="6px 0px 6px 0px"
						lg-margin="0px 0px 24px 0px"
						align-items="center"
						flex-wrap="wrap"
						overflow-x="visible"
						overflow-y="visible"
						lg-align-items="flex-start"
					>
						<Override
							slot="link"
							color="--darkL2"
							hover-color="--primary"
							font="--base"
							text-decoration-line="initial"
							transition="color 0.1s ease 0s"
							lg-font="--lead"
						/>
						<Override
							slot="item-active"
							border-width="0 0 2px 0"
							border-style="solid"
							border-color="--color-darkL2"
							lg-border-width="0 0 0 2px"
						/>
						<Override slot="item" padding="6px 6px 6px 6px" lg-padding="6px 12px 6px 12px" />
						<Override slot="link-active" cursor="default" color="--darkL2" hover-color="--darkL2" />
						<Override slot="link-about" />
					</Components.QuarklycommunityKitMenu>
					<Link
						font="--base"
						text-decoration-line="initial"
						margin="0px 0px 0px 16px"
						background="--color-darkL1"
						border-radius="8px"
						href="#"
						color="#ffffff"
						padding="6px 12px 7px 12px"
						lg-margin="0px 0px 24px 0px"
						lg-padding="12px 18px 13px 18px"
						lg-font="--lead"
					>
						Book A Demo
					</Link>
					<Box
						width="25%"
						display="none"
						lg-width="100%"
						lg-flex-direction="column"
						lg-align-items="flex-start"
						lg-display="flex"
						justify-content="space-around"
						align-items="center"
						flex-wrap="wrap"
						lg-margin="32px 0px 0px 0px"
					>
						<SocialMedia
							instagram="https://instagram.com/instagram"
							margin="0px 0px 0px 0px"
							facebook="https://www.facebook.com/quarklyapp/"
							youtube="https://www.youtube.com/channel/UCK5bXs2L0bbSMQ82BQ3hIkw"
							lg-display="flex"
							lg-grid-gap="12px"
						>
							<Override slot="link-twitter" margin="0px 0px 0px 5px">
								<div />
							</Override>
							<Override
								slot="link"
								border-radius="50%"
								background="transparent"
								hover-color="--light"
								display="flex"
								margin="0 5px 0 5px"
								padding="5x 5px 5px 5px"
								width="32px"
								height="32px"
								align-items="center"
								justify-content="center"
							/>
							<Override slot="icon" size="32px" border-radius="50px" color="--grey" />
							<Override slot="link-facebook" margin="0px 5px 0px 0px">
								<div />
							</Override>
						</SocialMedia>
					</Box>
				</Box>
			</Components.QuarklycommunityKitMobileSidePanel>
		</Section>
		<Section overflow-x="hidden" overflow-y="hidden" quarkly-title="Hero-6">
			<Override slot="SectionContent" width="100%" flex="1 1 0%" max-width="100%" />
			<Box
				min-width="100px"
				min-height="100px"
				display="flex"
				position="static"
				lg-flex-direction="column"
			>
				<Box
					min-width="100px"
					min-height="100px"
					width="55%"
					padding="140px 80px 140px 80px"
					position="static"
					lg-width="100%"
					lg-padding="80px 30px 80px 30px"
					sm-padding="80px 30px 40px 30px"
				>
					<Text margin="0px 0px 20px 0px" font="--headline1" sm-font="normal 700 42px/1.2 --fontFamily-sans">
						Полный спектр рекламы для вашего успеха
					</Text>
					<Text margin="0px 0px 50px 0px" font="--headline3">
						Креативные сувениры, стильная полиграфия и эффективная реклама — вот, что мы предлагаем. Наши решения работают на ваш имидж. Поднимите ваш бренд на новый уровень с нашей помощью.
					</Text>
					<Box
						min-width="10px"
						min-height="10px"
						display="flex"
						sm-flex-direction="column"
						sm-align-items="stretch"
					>
						<Button
							margin="0px 15px 0px 0px"
							padding="12px 28px 12px 28px"
							border-radius="64px"
							font="--lead"
							sm-margin="0px 0 15px 0px"
							border-width="2px"
							border-style="solid"
							hover-color="--darkL1"
							hover-background="rgba(63, 36, 216, 0)"
							transition="background-color 0.2s ease 0s"
							background="--color-dark"
						>
							Связаться
						</Button>
					</Box>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					width="758px"
					display="flex"
					margin="0px -50px 0px 0px"
					position="static"
					bottom="-298px"
					height="716px"
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
					<Box
						min-width="100px"
						min-height="100px"
						display="flex"
						align-items="center"
						margin="80px 0 0 25px"
						width="33%"
						lg-margin="80px 0 0 0"
						sm-margin="50px 0 0 0"
					>
						<Image
							src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000"
							display="block"
							height="300px"
							border-radius="25px"
							object-fit="cover"
							width="100%"
							sm-height="200px"
							sm-width="200px"
							srcSet="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000&w=500 500w,https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000&w=800 800w,https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000&w=1080 1080w,https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000&w=1600 1600w,https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000&w=2000 2000w,https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000&w=2600 2600w,https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000&w=3200 3200w"
							sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
						/>
					</Box>
					<Box
						min-width="100px"
						min-height="100px"
						display="flex"
						align-items="center"
						flex-direction="column"
						justify-content="center"
						margin="80px 0 0 25px"
						width="33%"
						sm-align-self="center"
						sm-margin="50px 0 0 15px"
					>
						<Image
							src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000"
							display="block"
							max-width="100%"
							height="300px"
							object-fit="cover"
							border-radius="15px"
							margin="0px 0px 15px 0px"
							sm-height="200px"
							sm-width="200px"
							srcSet="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=500 500w,https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800 800w,https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1080 1080w,https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600 1600w,https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000 2000w,https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=2600 2600w,https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=3200 3200w"
							sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
						/>
						<Image
							src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000"
							display="block"
							max-width="100%"
							height="300px"
							object-fit="cover"
							border-radius="15px"
							margin="0px 0px 15px 0px"
							sm-height="200px"
							sm-width="200px"
							srcSet="https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=500 500w,https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800 800w,https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1080 1080w,https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600 1600w,https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000 2000w,https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=2600 2600w,https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=3200 3200w"
							sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
						/>
					</Box>
					<Box
						min-width="100px"
						min-height="100px"
						display="flex"
						align-items="center"
						flex-direction="column"
						margin="0 0 0 25px"
						width="33%"
						justify-content="flex-start"
						sm-margin="0 0 0 15px"
					>
						<Image
							src="https://images.unsplash.com/photo-1517502884422-41eaead166d4?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000"
							display="block"
							max-width="100%"
							height="300px"
							object-fit="cover"
							border-radius="15px"
							margin="0px 0px 15px 0px"
							sm-height="200px"
							sm-width="200px"
							srcSet="https://images.unsplash.com/photo-1517502884422-41eaead166d4?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=500 500w,https://images.unsplash.com/photo-1517502884422-41eaead166d4?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800 800w,https://images.unsplash.com/photo-1517502884422-41eaead166d4?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1080 1080w,https://images.unsplash.com/photo-1517502884422-41eaead166d4?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600 1600w,https://images.unsplash.com/photo-1517502884422-41eaead166d4?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000 2000w,https://images.unsplash.com/photo-1517502884422-41eaead166d4?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=2600 2600w,https://images.unsplash.com/photo-1517502884422-41eaead166d4?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=3200 3200w"
							sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
						/>
						<Image
							src="https://images.unsplash.com/photo-1495314736024-fa5e4b37b979?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000"
							display="block"
							max-width="100%"
							height="300px"
							object-fit="cover"
							border-radius="15px"
							margin="0px 0px 15px 0px"
							sm-height="200px"
							sm-width="200px"
							srcSet="https://images.unsplash.com/photo-1495314736024-fa5e4b37b979?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=500 500w,https://images.unsplash.com/photo-1495314736024-fa5e4b37b979?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800 800w,https://images.unsplash.com/photo-1495314736024-fa5e4b37b979?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1080 1080w,https://images.unsplash.com/photo-1495314736024-fa5e4b37b979?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600 1600w,https://images.unsplash.com/photo-1495314736024-fa5e4b37b979?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000 2000w,https://images.unsplash.com/photo-1495314736024-fa5e4b37b979?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=2600 2600w,https://images.unsplash.com/photo-1495314736024-fa5e4b37b979?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=3200 3200w"
							sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
						/>
					</Box>
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
							Уникальные сувениры для яркого впечатления!{"\n\n"}
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
							Брендируем с душой и вниманием к каждой детали!{"\n\n"}
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
							Логотип, который расскажет о вашем бренде!{"\n\n"}
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
							Каждый предмет с вашим логотипом — это шаг к успеху!{"\n\n\n\n"}
						</Text>
					</Box>
				</LinkBox>
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
				безупречное качество{" \n\n"}
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
						sm-height="220px"
						height="600px"
						lg-height="400px"
						md-width="100%"
						md-height="450px"
						border-radius="64px"
						srcSet="https://smartuploads.quarkly.io/673219af9710450018a442af/images/f97748e0da64237faf12.%20%281%29.jpg?v=2024-11-11T16%3A42%3A53.789Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/673219af9710450018a442af/images/f97748e0da64237faf12.%20%281%29.jpg?v=2024-11-11T16%3A42%3A53.789Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/673219af9710450018a442af/images/f97748e0da64237faf12.%20%281%29.jpg?v=2024-11-11T16%3A42%3A53.789Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/673219af9710450018a442af/images/f97748e0da64237faf12.%20%281%29.jpg?v=2024-11-11T16%3A42%3A53.789Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/673219af9710450018a442af/images/f97748e0da64237faf12.%20%281%29.jpg?v=2024-11-11T16%3A42%3A53.789Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/673219af9710450018a442af/images/f97748e0da64237faf12.%20%281%29.jpg?v=2024-11-11T16%3A42%3A53.789Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/673219af9710450018a442af/images/f97748e0da64237faf12.%20%281%29.jpg?v=2024-11-11T16%3A42%3A53.789Z&quality=85&w=3200 3200w"
						sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
					/>
					<Text margin="0px 0px 15px 0px" font="--lead">
						Круговая УФ-печать позволяет наносить изображение на цилиндрические поверхности, например, на чашки, бутылки и ручки. Благодаря этому виду нанесения можно получить яркую картинку, которая будет прочно держаться на поверхности изделия, запечатать можно товар из металла, пластика и других материалов.{" \n\n"}
					</Text>
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
						sm-height="220px"
						height="600px"
						lg-height="400px"
						md-width="100%"
						md-height="450px"
						border-radius="64px"
						srcSet="https://smartuploads.quarkly.io/673219af9710450018a442af/images/1f0168138d330f10f551.%20%281%29.jpg?v=2024-11-11T16%3A42%3A53.841Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/673219af9710450018a442af/images/1f0168138d330f10f551.%20%281%29.jpg?v=2024-11-11T16%3A42%3A53.841Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/673219af9710450018a442af/images/1f0168138d330f10f551.%20%281%29.jpg?v=2024-11-11T16%3A42%3A53.841Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/673219af9710450018a442af/images/1f0168138d330f10f551.%20%281%29.jpg?v=2024-11-11T16%3A42%3A53.841Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/673219af9710450018a442af/images/1f0168138d330f10f551.%20%281%29.jpg?v=2024-11-11T16%3A42%3A53.841Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/673219af9710450018a442af/images/1f0168138d330f10f551.%20%281%29.jpg?v=2024-11-11T16%3A42%3A53.841Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/673219af9710450018a442af/images/1f0168138d330f10f551.%20%281%29.jpg?v=2024-11-11T16%3A42%3A53.841Z&quality=85&w=3200 3200w"
						sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
					/>
					<Text margin="0px 0px 15px 0px" font="--lead">
						Цифровая печать стала ярче и быстрее с новым принтером Kornit Storm HD6! Он печатает в 3 раза быстрее, поддерживает палитру CMYK + GR для точных цветов и увеличил площадь нанесения до 40x50 см. Теперь можно печатать даже через молнию или шов!{"\n\n"}
					</Text>
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
						sm-height="220px"
						height="600px"
						lg-height="400px"
						md-width="100%"
						md-height="450px"
						border-radius="64px"
						srcSet="https://smartuploads.quarkly.io/673219af9710450018a442af/images/5011fa46d218c90fa133.%20%281%29.jpg?v=2024-11-11T16%3A43%3A52.959Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/673219af9710450018a442af/images/5011fa46d218c90fa133.%20%281%29.jpg?v=2024-11-11T16%3A43%3A52.959Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/673219af9710450018a442af/images/5011fa46d218c90fa133.%20%281%29.jpg?v=2024-11-11T16%3A43%3A52.959Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/673219af9710450018a442af/images/5011fa46d218c90fa133.%20%281%29.jpg?v=2024-11-11T16%3A43%3A52.959Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/673219af9710450018a442af/images/5011fa46d218c90fa133.%20%281%29.jpg?v=2024-11-11T16%3A43%3A52.959Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/673219af9710450018a442af/images/5011fa46d218c90fa133.%20%281%29.jpg?v=2024-11-11T16%3A43%3A52.959Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/673219af9710450018a442af/images/5011fa46d218c90fa133.%20%281%29.jpg?v=2024-11-11T16%3A43%3A52.959Z&quality=85&w=3200 3200w"
						sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
					/>
					<Text margin="0px 0px 15px 0px" font="--lead">
						Теперь не нужно выбирать между красным и синим — наш новый полноцветный термотрансфер позволяет печатать фотографии на текстиле до 33х48 см. Этот принтер в 5 раз быстрее обычного, способен печатать до 1000 листов формата A3 за смену и стоит как термотрансфер в два цвета. Подходит для малых тиражей благодаря одной сетке печатной формы.{"\n\n\n\n\n\n\n\n"}
					</Text>
				</Box>
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
					{"\n\n"}
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
						Уникальных видов сувенирной продукции{"\n\n"}
					</Strong>
					{"\n\n"}
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
						Клиентов рекомендуют нас{"\n\n"}
					</Strong>
					{"\n\n"}
				</Text>
			</Box>
		</Section>
		<Section padding="90px 0 100px 0" background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/643d8e6ebf72b300207d7233/images/blurred-premium-violet-color-abstract-wallpaper.jpg?v=2023-04-27T14:14:02.129Z) 0% 0% /cover repeat scroll padding-box" quarkly-title="Reviews-4">
			<Text
				margin="0px 0px 20px 0px"
				font="normal 500 20px/1.5 --fontFamily-sansHelvetica"
				color="--indigo"
				lg-margin="0px 0px 20px 0px"
				text-align="center"
			/>
			<Text margin="0px 0px 70px 0px" font="--headline2" text-align="center" md-margin="0px 0px 50px 0px">
				Что о нас говорят клиенты
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
								Работаем с этим агентством уже несколько лет, и всегда остаёмся довольны! Ребята знают, как создать качественные сувениры и рекламные материалы. Всегда соблюдают сроки и понимают, что нужно нашему бренду.{"\n\n"}
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
								Лучшая команда, с которой мне доводилось работать! Помогли с дизайном, предложили интересные решения и сделали всё оперативно. Всем рекомендую.{"\n\n\n\n"}
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
								Заказывали сувениры для выставки, и всё получилось именно так, как мы хотели. Отличное качество, дизайн на высоте, а главное — вовремя! Спасибо за профессионализм.{"\n\n"}
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
								Понравилось, что учли все наши пожелания и предложили отличные идеи, о которых мы даже не думали. Отзывы от клиентов очень положительные, так что агентство нас не подвело.{"\n\n"}
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
								Работали с разными агентствами, но это — лучший опыт. Все выполнено в срок, качество продукции отменное, и цены приятно удивили. Обязательно обратимся снова.{"\n\n"}
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
								Огромное спасибо за индивидуальный подход и внимание к деталям. Каждый этап был под контролем, а сотрудники всегда на связи. Агентство, которому можно доверять!"{"\n\n"}
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
								Очень довольны сотрудничеством! Получили нужный результат даже раньше срока, а качество на высоте. Заказали партию сувениров, и уже знаем, к кому обратимся в следующий раз.{"\n\n"}
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
								Отличное агентство! Заказывали у них полиграфию и рекламные материалы для открытия нового филиала. Всё получилось очень стильно и привлекательно, прямо как хотели. Рады, что обратились именно к ним!{"\n\n"}
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
								С этим агентством можно быть спокойным за результат. Заказывали у них сувениры и брендированные аксессуары для партнёров — всё выполнено качественно, аккуратно, и наши партнёры остались довольны.{"\n\n\n\n"}
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
								Очень приятно работать с профессионалами, которые знают своё дело. Ребята предложили интересные идеи и сделали продукцию, которую хочется использовать каждый день. Спасибо за креативность и внимание!{"\n\n\n\n"}
							</Text>
						</Box>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section background="--color-darkL1" padding="80px 0 80px 0">
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
					rekdomik@gmail.com{"\n"}
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
					href="tel:1234567899"
					text-align="center"
					color="--light"
					font="--headline3"
					text-decoration-line="initial"
					margin="0px 0px 16px 0px"
				>
					(123) 456-78-99
				</Link>
				<Text margin="0px 0px 48px 0px" font="--headline3" color="--light" text-align="center">
					<Link href="https://yandex.com/maps/-/CDtW4YmJ" color="#ffffff" font="--headline3" target="_blank">
						350010, Краснодар, Зиповская ул., 5Г,{" "}
						<br />
						микрорайон Завод Измерительных Приборов{"\n"}
					</Link>
				</Text>
				<SocialMedia facebook="https://www.facebook.com/quarklyapp/" twitter="https://twitter.com/quarklyapp" instagram="https://instagram.com/instagram" margin="0px 0px 0px 0px">
					<Override
						slot="link"
						border-radius="50%"
						color="--grey"
						hover-color="--light"
						background="#191E22"
						hover-background="--color-primary"
						margin="0 5px 0 5px"
						padding="5x 5px 5px 5px"
						width="48px"
						height="48px"
						align-items="center"
						display="flex"
						justify-content="center"
						hover-transition="background-color 0.2s ease-in-out 0s"
						transition="background-color 0.2s ease-in-out 0s"
					/>
					<Override
						slot="icon"
						color="--light"
						padding="7px 7px 7px 7px"
						border-width="0px"
						size="38px"
						border-radius="50px"
					/>
				</SocialMedia>
			</Box>
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