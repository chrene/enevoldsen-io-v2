import Masonry from "react-masonry-css"

const MasonryGrid = ({ children, breakpointCols, ...rest }) => {
  const defaultBreakpointColumnsObj = breakpointCols || {
    default: 2,
    700: 1,
  }

  return (
    <Masonry
      breakpointCols={defaultBreakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
      {...rest}
    >
      {children}
    </Masonry>
  )
}

export default MasonryGrid
