import React from 'react'
import FavoriteIcon from "@mui/icons-material/Favorite";

function LikedBadge() {
  return (
    <div className="DefaultView_LikedBadge absolute top-0 right-0" data-testid="likedBadge">
      <FavoriteIcon className="text-red-400"/>
    </div>
  )
}

export default LikedBadge