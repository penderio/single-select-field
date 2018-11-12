import React from 'react'
import PropTypes from 'prop-types'
import RecordGalleryCard from './contexts/recordGalleryCard'

export default class SingleSelectField extends React.Component {

    static propTypes = {
        optionId: PropTypes.string,
        options: PropTypes.shape({
            options: PropTypes.arrayOf(PropTypes.string.isRequired)
        })
    }

    render() {

        const {contextId} = this.props

        if (contextId === 'recordGalleryCard') {

            return (
                <RecordGalleryCard
                    {...this.props}
                />
            )
        }

        return (
            <div>
                Not supported
            </div>
        )
    }
}