import Image from 'next/image'
import React from 'react'

const NotificationPanel = () => {
    return (
        <div>
            <div className="flex justify-between px-3 mt-5 items-center">
                <div className="flex items-center ">
                    <button >
                        <Image src={'/Images/Order-Discussion.png'} width={40} height={40} alt='This is Image'/>
                    </button>
                    <button className="mx-2">
                        <Image src={'/Images/icon/notification.png'} width={40} height={40} alt='This is Image'/>
                    </button><button>
                        <Image src={'/Images/icon/Setting.png'} width={40} height={40} alt='This is Image'/>
                    </button>
                </div>
                <Image width={40} height={40} class="rounded" src="https://www.svgrepo.com/show/382109/male-avatar-boy-face-man-user-7.svg" alt="Default avatar" ></Image>
            </div>
        </div>
    )
}

export default NotificationPanel