import React from 'react'
import { DiAtom } from 'react-icons/di'
import {  NavLink } from 'react-router-dom'

function Items() {
  return (
    <>
      <NavLink to='/learn' className='hero_items'>
      <h2 className='hero_items_title'>Questions</h2>
      <DiAtom className='hero_items_icon'/>
    </NavLink>
    <NavLink to='/info' className='hero_items'>
      <h2 className='hero_items_title'>Questions</h2>
      <DiAtom className='hero_items_icon'/>
    </NavLink>
    <NavLink to='/programs' className='hero_items'>
      <h2 className='hero_items_title'>Questions</h2>
      <DiAtom className='hero_items_icon'/>
    </NavLink>
    <NavLink to='/earn' className='hero_items'>
      <h2 className='hero_items_title'>Questions</h2>
      <DiAtom className='hero_items_icon'/>
    </NavLink>
    <NavLink to='/admin' className='hero_items'>
      <h2 className='hero_items_title'>Questions</h2>
      <DiAtom className='hero_items_icon'/>
    </NavLink>
    </>
  
  )
}

export default Items