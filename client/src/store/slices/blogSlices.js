
export const createBlogSlice = (set) => (
    
    {    
          currentBlog : {},
          addblog : (blog) => set({ currentBlog: blog }),
    }
)