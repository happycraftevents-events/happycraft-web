"use client";

import { useState, useMemo } from "react";
import { ImageLightbox } from "@/components/image-lightbox";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RotateCcw, Filter } from "lucide-react";
import { galleryImages } from "@/data/gallery-data";
import Image from "next/image";
import { ScrollReveal } from "../scroll-reveal";

export function GalleryContent() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLocation, setSelectedLocation] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Get unique locations for filter dropdown
  const uniqueLocations = useMemo(() => {
    const locations = Array.from(
      new Set(galleryImages.map((img) => img.location))
    ).sort();
    return ["All", ...locations];
  }, []);
 const uniqueCategories = useMemo(() => {
    const categories = Array.from(
      new Set(galleryImages.map((img) => img.category))
    ).sort();
    return ["All", ...categories];
  }, []);
  // Filter images based on all selected filters and search query
  const filteredImages = useMemo(() => {
    return galleryImages.filter((image) => {
      const categoryMatch =
        selectedCategory === "All" || image.category === selectedCategory;
      const locationMatch =
        selectedLocation === "All" || image.location === selectedLocation;

      const searchMatch =
        searchQuery === "" ||
        image.event.toLowerCase().includes(searchQuery.toLowerCase()) ||
        image.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        image.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        image?.year?.toLowerCase().includes(searchQuery.toLowerCase());

      return categoryMatch && locationMatch && searchMatch;
    });
  }, [selectedCategory, selectedLocation, searchQuery]);

  // Check if any filters are active
  const hasActiveFilters =
    selectedCategory !== "All" || selectedLocation !== "All";

  // Count active filters
  const getActiveFilterCount = () => {
    let count = 0;
    if (selectedCategory !== "All") count++;
    if (selectedLocation !== "All") count++;
    if (searchQuery !== "") count++;
    return count;
  };

  // Reset all filters
  const resetFilters = () => {
    setSelectedCategory("All");
    setSelectedLocation("All");
    setSearchQuery("");
  };

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % filteredImages.length);
  };

  const previousImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + filteredImages.length) % filteredImages.length
    );
  };

  return (
    <>
      <ScrollReveal direction="up" delay={200}>
        {/* Hero Section */}
        <section className="relative  py-8 lg:py-6 bg-gradient-to-br from-background to-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <Badge variant="secondary" className="mb-4 text-sm font-medium">
                Our Gallery
              </Badge>
              <h1 className="text-2xl lg:text-4xl font-bold text-balance mb-3 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                A Glimpse of Our Unforgettable Creations
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground text-pretty mb-0">
                Explore our portfolio of extraordinary events and celebrations.
                Each image tells a story of creativity, precision, and
                unforgettable experiences crafted with passion.
              </p>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-4 bg-white border-b border-muted/20 rounded-2xl container mx-auto">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Filter Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-3">
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-primary" />
                <span className="font-medium text-base">Filter Events</span>
                {(hasActiveFilters || searchQuery) && (
                  <Badge
                    variant="secondary"
                    className="bg-orange-500 text-white text-xs px-2 py-1"
                  >
                    {getActiveFilterCount()} Active
                  </Badge>
                )}
              </div>

              {/* Active Filter Tags */}
              <div className="flex items-center gap-1 flex-wrap">
                {searchQuery && (
                  <Badge
                    variant="outline"
                    className="bg-teal-50 text-teal-700 border-teal-200  text-xs px-2 py-1"
                  >
                    Search: "{searchQuery}"
                    <button
                      onClick={() => setSearchQuery("")}
                      className="ml-1 bg-teal-50 text-teal-700 border-teal-200 text-xs px-2 py-1  cursor-pointer"
                    >
                      ×
                    </button>
                  </Badge>
                )}
                {selectedCategory !== "All" && (
                  <Badge
                    variant="outline"
                    className="bg-teal-50 text-teal-700 border-teal-200 text-xs px-2 py-1"
                  >
                    Category: {selectedCategory}
                    <button
                      onClick={() => setSelectedCategory("All")}
                      className="ml-1 text-teal-500 hover:text-teal-700 text-sm cursor-pointer"
                    >
                      ×
                    </button>
                  </Badge>
                )}
                {selectedLocation !== "All" && (
                  <Badge
                    variant="outline"
                    className="bg-teal-50 text-teal-700 border-teal-200 text-xs px-2 py-1"
                  >
                    Location: {selectedLocation}
                    <button
                      onClick={() => setSelectedLocation("All")}
                      className="ml-1 text-teal-500 hover:text-teal-700 text-sm cursor-pointer"
                    >
                      ×
                    </button>
                  </Badge>
                )}
              </div>
            </div>

            {/* Filter Controls - Responsive Single Layout */}
            <div className="flex flex-col sm:flex-row gap-3 w-full">
              {/* Search Input */}
              <div className="flex-1 w-full">
                <div className="relative">
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                    <svg
                      className="h-4 w-4 text-muted-foreground"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    placeholder="Search events..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 text-sm border border-muted-foreground/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div className="w-full sm:w-48">
                <Select
                  value={selectedCategory}
                  onValueChange={setSelectedCategory}
                >
                  <SelectTrigger className="h-10 text-sm w-full">
                    <SelectValue placeholder="All Categories">
                      <span className="truncate block max-w-full">
                        {selectedCategory === "All"
                          ? "All Categories"
                          : selectedCategory}
                      </span>
                    </SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    {uniqueCategories.map((category) => (
                      <SelectItem
                        key={category}
                        value={category}
                        className="text-sm"
                      >
                        {category === "All" ? "All Categories" : category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Location Filter */}
              <div className="w-full sm:w-48">
                <Select
                  value={selectedLocation}
                  onValueChange={setSelectedLocation}
                >
                  <SelectTrigger className="h-10 text-sm w-full">
                    <SelectValue placeholder="All Locations">
                      <span className="truncate block max-w-full">
                        {selectedLocation === "All"
                          ? "All Locations"
                          : selectedLocation}
                      </span>
                    </SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    {uniqueLocations.map((location) => (
                      <SelectItem
                        key={location}
                        value={location}
                        className="text-sm"
                      >
                        {location === "All" ? "All Locations" : location}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Clear Button - Only show when filters are active */}
              {(hasActiveFilters || searchQuery) && (
                <Button
                  onClick={resetFilters}
                  variant="outline"
                  size="sm"
                  className="w-full sm:w-auto bg-red-50 text-red-600 border-red-200 hover:bg-red-100 hover:text-red-700 cursor-pointer h-[2.3rem] px-4 text-sm whitespace-nowrap"
                >
                  <RotateCcw className="h-4 w-4 mr-0" />
                  Clear All
                </Button>
              )}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-6">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {filteredImages.length === 0 ? (
              /* No Results State */
              <div className="text-center py-2">
                <div className="max-w-md mx-auto">
                  <Image
                    src="/error/no-result.svg"
                    alt="No results found"
                    draggable={false}
                    height={192}
                    width={192}
                    className="mx-auto mb-6 w-48 h-48 opacity-80"
                  />
                  <h3 className="text-2xl font-bold mb-4">No Events Found</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    We couldn't find any events matching your current filters.
                    Try adjusting your search criteria or explore our complete
                    gallery.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center mb-28">
                    <Button onClick={resetFilters} className="cursor-pointer">
                      <RotateCcw className="h-4 w-4 mr-2" />
                      Reset All Filters
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => {
                        setSelectedCategory("All");
                        setSelectedLocation("All");
                        setSearchQuery("");
                      }}
                      className="cursor-pointer  hover:bg-muted-foreground"
                    >
                      Browse All Events
                    </Button>
                  </div>
                </div>
              </div>
            ) : (
              /* Results Grid */
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredImages.map((image, index) => (
                    <div
                      key={image.id}
                      className="group relative overflow-hidden rounded-lg cursor-pointer hover:shadow-lg transition-all duration-300"
                      onClick={() => openLightbox(index)}
                    >
                      <div className="aspect-square relative">
                        <Image
                          src={image.src || "/placeholder.svg"}
                          alt={image.alt}
                          draggable={false}
                          fill
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                        />

                        {/* Always visible category badge */}
                        <div className="absolute top-3 left-3 z-10">
                          <Badge
                            variant="secondary"
                            className="bg-white/90 text-gray-800 backdrop-blur-sm border border-white/20 shadow-sm hover:bg-white transition-all"
                          >
                            {image.category}
                          </Badge>
                        </div>

                        {/* Hover overlay with event details */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="text-center text-white p-4">
                            <h3 className="font-semibold text-lg mb-1">
                              {image.event}
                            </h3>
                            <p className="text-sm opacity-90">
                              {image.location} 
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </section>

        {/* Lightbox */}
        <ImageLightbox
          images={filteredImages}
          currentIndex={currentImageIndex}
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
          onNext={nextImage}
          onPrevious={previousImage}
        />
      </ScrollReveal>
    </>
  );
}
