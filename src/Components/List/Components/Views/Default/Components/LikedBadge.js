import React from 'react'
import FavoriteIcon from "@mui/icons-material/Favorite";

function LikedBadge() {
  return (
    <div className="DefaultView_LikedBadge absolute top-0 right-0">
      <FavoriteIcon sx={{fill: "red"}}/>
    </div>
  )
}

export default LikedBadge