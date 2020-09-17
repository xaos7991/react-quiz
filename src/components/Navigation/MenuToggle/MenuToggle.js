import React from 'react'
import classes from './MenuToggle.module.scss'

const MenuToggle = props => {
    const cls = [
        classes.MenuToggle,
        'fa'
    ]

    cls.push(
        props.isOpen
            ? 'fa-times ' + classes.open
            : 'fa-bars'
    )

    return (
        <i
            className={cls.join(' ')}
            onClick={props.onToggle}
        />
    )
}

export default MenuToggle
