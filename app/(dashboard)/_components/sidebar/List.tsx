"use client"
import React from 'react'
import {useOrganizationList} from "@clerk/nextjs"
import { Item } from './Item'

export const List = () => {
    const { userMemberships}= useOrganizationList({userMemberships:{
        infinite:true
    }})

    if(!userMemberships.data?.length) return null;
  console.log('users',userMemberships.data);
    return (
    <ul className='space-y-4'>
        {userMemberships.data?.map((member)=>(
           <Item
            key={member.organization.id}
            id={member.organization.id}
            name={member.organization.name}
            imageUrl={member.organization.imageUrl}
           />
        ))}

    </ul>
  )
}
