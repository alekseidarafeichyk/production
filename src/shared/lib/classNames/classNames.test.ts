import { classNames } from 'shared/lib/classNames/classNames'

describe('classNames', () => {
    test('with only first param', () => {
        expect(classNames('mainClass')).toBe('mainClass')
    })

    test('with main and additional classes', () => {
        expect(classNames('mainClass', {}, ['firstClass', 'secondClass'])).toBe('mainClass firstClass secondClass')
    })

    test('with mod', () => {
        expect(classNames('mainClass', { hovered: true })).toBe('mainClass hovered')
    })

    test('with mods', () => {
        expect(classNames('mainClass', { hovered: true, active: true })).toBe('mainClass hovered active')
    })

    test('with mods false', () => {
        expect(classNames('mainClass', { hovered: false, active: true })).toBe('mainClass active')
    })

    test('with mods undefined', () => {
        expect(classNames('mainClass', { hovered: undefined, active: true })).toBe('mainClass active')
    })
})
