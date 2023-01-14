import React from 'react'
import {Box,makeStyles} from '@material-ui/core'
import Headline from 'components/headline/Headline'
import SpecialSlider from 'components/specialSlider/SpecialSlider'
import { BLACK } from 'constants/colors'
import { WHITE } from 'constants/colors'
const useStyles = makeStyles({
    root: {
      backgroundColor:WHITE,
      color:BLACK,
      width:"100%",
      borderRadius:10,
      boxShadow:"0 2px 4px 0 rgba(0,0,0,.2)",
      border:"1px solid  rgba(0,0,0,.05)",
      minHeight:100,
    },
})
const Recommendation = ({Childs,headLine}) => {
    const classes = useStyles()
    return (
        <Box className={classes.root} >
            <Headline title={headLine}/>
            <SpecialSlider renderItem={5} cardType={2} child={Childs} />
        </Box>
    )
}

export default Recommendation
