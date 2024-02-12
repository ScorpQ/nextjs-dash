'use client'
//MANTINE
import { AppShell, Burger, Group, Skeleton, Text, MantineProvider } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MantineLogo } from '@mantinex/mantine-logo';
import '@mantine/core/styles.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [opened, { toggle }] = useDisclosure();
  return (
    <html lang="en">
      <head>
        <link href="https://www.mecellem.com/assets/icons/icon.css?4cb18f1beddb66a33174sda" rel="stylesheet"/>
      </head>
      <body>
        <MantineProvider>
        <AppShell
        layout="alt"
        header={{ height: 60 }}
        footer={{ height: 60 }}
        navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
        aside={{ width: 300, breakpoint: 'md', collapsed: { desktop: false, mobile: true } }}
        padding="md"
        >
        <AppShell.Header>
          <Group h="100%" px="md">
            <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
            <MantineLogo size={30} />
          </Group>
        </AppShell.Header>
        <AppShell.Navbar p="md">
          <Group>
            <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
            <Text>Navbar</Text>
          </Group>
          {Array(15)
            .fill(0)
            .map((_, index) => (
              <Skeleton key={index} h={28} mt="sm" animate={false} />
            ))}
        </AppShell.Navbar>
        <AppShell.Main>
          {children}
        </AppShell.Main>
        <AppShell.Aside p="md">Aside</AppShell.Aside>
        <AppShell.Footer p="md">Footer</AppShell.Footer>
        </AppShell>
        </MantineProvider>
      </body>
    </html>
  )
}
