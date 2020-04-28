import React from "react";
import AlbumComponent from "../AlbumComponent";
import Photo from "../PhotosComponent";
import { usePhotoState } from "../../context";
import { shallow } from "enzyme";
jest.mock("../../context");

describe("AlbumComponent", () => {
  const photosArray = [
    {
      albumId: 1,
      id: 1,
      title: "accusamus beatae ad facilis cum similique qui sunt",
      url: "https://via.placeholder.com/600/92c952",
      thumbnailUrl: "https://via.placeholder.com/150/92c952",
    },
    {
      albumId: 1,
      id: 2,
      title: "reprehenderit est deserunt velit ipsam",
      url: "https://via.placeholder.com/600/771796",
      thumbnailUrl: "https://via.placeholder.com/150/771796",
    },
    {
      albumId: 1,
      id: 3,
      title: "officia porro iure quia iusto qui ipsa ut modi",
      url: "https://via.placeholder.com/600/24f355",
      thumbnailUrl: "https://via.placeholder.com/150/24f355",
    },
  ];

  beforeEach(() => {
    usePhotoState.mockReturnValue({
        photos: photosArray,
      });
  });

  afterEach(() => jest.resetAllMocks());

  it("renders photo album correctly", () => {
    const wrapper = shallow(<AlbumComponent />);
    expect(wrapper).toMatchSnapshot();
  });

  it('contains album and photos', () => {
    const wrapper = shallow(<AlbumComponent />);
    expect(wrapper.find(".album")).toHaveLength(1);
    expect(wrapper.contains(<Photo {...photosArray[0]} />)).toEqual(true);
    expect(wrapper.contains(<Photo {...photosArray[1]} />)).toEqual(true);
    expect(wrapper.contains(<Photo {...photosArray[2]} />)).toEqual(true);
  });
});
