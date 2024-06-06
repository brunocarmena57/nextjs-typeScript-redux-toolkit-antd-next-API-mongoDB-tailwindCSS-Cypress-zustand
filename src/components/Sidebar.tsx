"use client"
import React, { useState, useEffect } from 'react'
import { Layout, Menu, theme } from 'antd'
import { usePathname, useRouter } from 'next/navigation'
import { sidebarItems } from '@/shared/Data'
const { Sider } = Layout
const Sidebar = () => {
    const { push } = useRouter();
    const path = usePathname()
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const [selectedKeys, setSelectedKeys] = useState<string[]>([])

    const handleMenuClick = (key: string) => {
        push(key)
        setSelectedKeys([key])
    }
    useEffect(() => {
        const link = sidebarItems.find((link) => link.key === path)
        if (link) {
            setSelectedKeys([link.key])
        }

    }, [path])
    return (
        <>
            <Layout
                hasSider
                style={{ padding: '24px 0', background: '#fff' }}
                className='lg:flex lg:flex-col h-[90vh] top-0 sticky gap-8 overflow-hidden hidden'
            >
                <Sider
                    breakpoint="lg"
                    collapsedWidth="0"
                    style={{ background: colorBgContainer }}
                    width={350}
                    collapsible
                    className='h-screen overflow-y-scroll'
                >
                    <div className='mb-4'>
                        <span className='p-4 text-[20px] font-semibold'>Painel</span>
                    </div>
                    <Menu
                        onClick={({ key }) => handleMenuClick(key)}
                        mode='inline'
                        selectedKeys={selectedKeys}
                        defaultSelectedKeys={['teacher']}
                    >
                        {sidebarItems.map((item) => {

                            return (
                                <Menu.Item
                                    key={item.key}
                                >
                                    <div className="flex items-center gap-3">
                                        <span className='text-[16px]'>{item.icon}</span>
                                        <span className='text-[15px] font-medium '>{item.title}</span>
                                    </div>
                                </Menu.Item>
                            )
                        })}
                    </Menu>
                </Sider>
            </Layout>
        </ >
    )
}

export default Sidebar